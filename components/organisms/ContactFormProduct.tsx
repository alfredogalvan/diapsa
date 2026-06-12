/**
 * ContactFormProduct Component
 * Formulario de contacto para productos con validación completa
 */

'use client';

import { useState, useRef, FormEvent } from 'react';
import { ProductDetail } from '@/types/product';
import { useContactForm } from '@/lib/hooks/useContactForm';
import { sanitizeContactFormData } from '@/lib/utils/sanitizeFormData';
import InputField, { TextareaField, SelectField } from '@/components/atoms/InputField';
import LoadingSpinner from '@/components/atoms/LoadingSpinner';
import SuccessMessage from '@/components/atoms/SuccessMessage';
import RateLimitNotice, { RateLimitBanner } from '@/components/molecules/RateLimitNotice';
import { FormErrors } from '@/components/atoms/FormFieldError';
import type { ContactFormProduct as ContactFormProductType } from '@/types/contact';

interface Props {
    product: ProductDetail;
    onSuccess?: () => void;
    className?: string;
}

const sectors = [
    { value: 'Oil & Gas', label: 'Oil & Gas' },
    { value: 'Petroquímica', label: 'Petroquímica' },
    { value: 'Manufactura', label: 'Manufactura' },
    { value: 'Energía', label: 'Energía' },
    { value: 'Minería', label: 'Minería' },
    { value: 'Alimentos', label: 'Alimentos' },
    { value: 'Otro', label: 'Otro' },
];

const purchaseStages = [
    { value: 'Investigando Opciones', label: 'Investigando Opciones' },
    { value: 'Evaluando Proveedores', label: 'Evaluando Proveedores' },
    { value: 'Listo para comprar', label: 'Listo para comprar' },
    { value: 'Tengo presupuesto aprobado', label: 'Tengo presupuesto aprobado' },
];

const equipmentQuantities = [
    { value: '1', label: '1 equipo' },
    { value: '2-5', label: '2-5 equipos' },
    { value: '6-10', label: '6-10 equipos' },
    { value: '10+', label: 'Más de 10 equipos' },
];

export default function ContactFormProduct({
    product,
    onSuccess,
    className = '',
}: Props) {
    const {
        submitForm,
        loading,
        success,
        errors: apiErrors,
        rateLimitExceeded,
        retryAfter,
        resetForm,
        validateField,
    } = useContactForm();

    const [formData, setFormData] = useState<ContactFormProductType>({
        name: '',
        email: '',
        phone: '',
        company: '',
        form_type: 'products',
        custom_fields: {
            sector: '',
            sector_otro: '',
            problem_to_resolve: '',
            purchase_stage: '',
            job_title: '',
            amount_product: '',
            product: product?.name || '',
            brand: product?.brand.name || '',
            category: product?.category.name || '',
        },
    });

    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
    const formRef = useRef<HTMLFormElement>(null);

    // Handle input change
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;

        if (
            name === 'sector' ||
            name === 'sector_otro' ||
            name === 'problem_to_resolve' ||
            name === 'purchase_stage' ||
            name === 'job_title' ||
            name === 'amount_product'
        ) {
            setFormData((prev) => ({
                ...prev,
                custom_fields: {
                    ...prev.custom_fields,
                    [name]: value,
                },
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }

        // Clear field error on change
        if (fieldErrors[name]) {
            setFieldErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    // Handle blur - validate field
    const handleBlur = (field: string, value: string) => {
        const error = validateField(field, value);
        if (error) {
            setFieldErrors((prev) => ({ ...prev, [field]: error }));
        }
    };

    // Handle submit
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Validate all required fields
        const newErrors: Record<string, string> = {};

        const nameError = validateField('name', formData.name);
        if (nameError) newErrors.name = nameError;

        const emailError = validateField('email', formData.email);
        if (emailError) newErrors.email = emailError;

        if (!formData.phone) {
            newErrors.phone = 'El teléfono es obligatorio';
        } else {
            const phoneError = validateField('phone', formData.phone);
            if (phoneError) newErrors.phone = phoneError;
        }

        if (!formData.company) {
            newErrors.company = 'La empresa es obligatoria';
        }

        if (!formData.custom_fields.sector) {
            newErrors.sector = 'El sector es obligatorio';
        }

        if (formData.custom_fields.sector === 'Otro' && !formData.custom_fields.sector_otro) {
            newErrors.sector_otro = 'Por favor especifica tu sector';
        }

        if (!formData.custom_fields.problem_to_resolve) {
            newErrors.problem_to_resolve = 'Este campo es obligatorio';
        }

        if (!formData.custom_fields.purchase_stage) {
            newErrors.purchase_stage = 'La etapa de compra es obligatoria';
        }

        if (!formData.custom_fields.job_title) {
            newErrors.job_title = 'El puesto es obligatorio';
        }

        if (!formData.custom_fields.amount_product) {
            newErrors.amount_product = 'La cantidad de equipos es obligatoria';
        }

        if (Object.keys(newErrors).length > 0) {
            setFieldErrors(newErrors);
            return;
        }

        // Submit
        const sanitizedData = sanitizeContactFormData(formData);
        const result = await submitForm(sanitizedData);

        if (result) {
            // Success - reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                form_type: 'products',
                custom_fields: {
                    sector: '',
                    amount_product: '',
                    sector_otro: '',
                    problem_to_resolve: '',
                    purchase_stage: '',
                    job_title: '',
                    product: product?.name || '',
                    brand: product?.brand.name || '',
                    category: product?.category.name || '',
                },
            });
            setFieldErrors({});
            formRef.current?.reset();
            onSuccess?.();
        }
    };

    // Get error message for field
    const getFieldError = (field: string): string | undefined => {
        if (fieldErrors[field]) return fieldErrors[field];
        if (apiErrors[field]) return apiErrors[field][0];
        return undefined;
    };

    // Show success message
    if (success) {
        return (
            <div className={className}>
                <SuccessMessage
                    message="¡Gracias por tu interés! Hemos recibido tu solicitud y un especialista se pondrá en contacto contigo pronto."
                    icon
                    onDismiss={resetForm}
                />
            </div>
        );
    }

    // Show rate limit notice
    if (rateLimitExceeded && retryAfter) {
        return (
            <div className={className}>
                <RateLimitNotice retryAfter={retryAfter} onRetryReady={resetForm} />
            </div>
        );
    }

    // General errors from API
    const generalErrors = apiErrors.general || [];

    return (
        <div className={className}>
            {/* Header */}
            <div className="mb-8 text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-3">
                    {product ? 'Solicita cotización del producto' : 'Contáctanos'}
                </h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    Completa el formulario y nuestro equipo de expertos te contactará para
                    brindarte la mejor solución para tus necesidades
                </p>
            </div>

            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6"
                noValidate
            >
                {/* General errors */}
                {generalErrors.length > 0 && <FormErrors errors={generalErrors} />}

                {/* Rate limit banner */}
                {retryAfter && retryAfter > 0 && (
                    <RateLimitBanner attemptsRemaining={0} maxAttempts={5} />
                )}

                {/* Información del producto (solo lectura) */}
                {product && (
                    <fieldset className="border-0 p-0 m-0">
                        <legend className="text-xl font-bold text-primary mb-4">
                            Información del producto
                        </legend>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <InputField
                                label="Producto"
                                name="product"
                                type="text"
                                value={product.name}
                                disabled
                            />
                            <InputField
                                label="Marca"
                                name="brand"
                                type="text"
                                value={product.brand.name}
                                disabled
                            />
                            <InputField
                                label="Categoría"
                                name="category"
                                type="text"
                                value={product.category.name}
                                disabled
                            />
                        </div>
                    </fieldset>
                )}

                {/* Datos personales */}
                <fieldset className="border-0 p-0 m-0">
                    <legend className="text-xl font-bold text-primary mb-4">
                        Cuéntanos sobre ti
                    </legend>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Name */}
                        <InputField
                            label="Nombre completo"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={(e) => handleBlur('name', e.target.value)}
                            error={getFieldError('name')}
                            required
                            disabled={loading}
                        />

                        {/* Email */}
                        <InputField
                            label="Correo electrónico"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={(e) => handleBlur('email', e.target.value)}
                            error={getFieldError('email')}
                            required
                            disabled={loading}
                        />

                        {/* Phone */}
                        <InputField
                            label="Teléfono"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            onBlur={(e) => handleBlur('phone', e.target.value)}
                            error={getFieldError('phone')}
                            helperText="Formato: +52 55 1234 5678"
                            required
                            disabled={loading}
                        />

                        {/* Company */}
                        <InputField
                            label="Empresa"
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleChange}
                            error={getFieldError('company')}
                            required
                            disabled={loading}
                        />

                        {/* Job Title */}
                        <InputField
                            label="Puesto"
                            name="job_title"
                            type="text"
                            value={formData.custom_fields.job_title}
                            onChange={handleChange}
                            error={getFieldError('job_title')}
                            required
                            disabled={loading}
                        />

                        {/* Sector */}
                        <SelectField
                            label="Sector"
                            name="sector"
                            options={sectors}
                            value={formData.custom_fields.sector}
                            onChange={handleChange}
                            error={getFieldError('sector')}
                            placeholder="Selecciona tu sector"
                            required
                            disabled={loading}
                        />
                    </div>

                    {/* Sector Otro - conditional */}
                    {formData.custom_fields.sector === 'Otro' && (
                        <div className="mt-4">
                            <InputField
                                label="Especifica tu sector"
                                name="sector_otro"
                                type="text"
                                value={formData.custom_fields.sector_otro}
                                onChange={handleChange}
                                error={getFieldError('sector_otro')}
                                required
                                disabled={loading}
                                placeholder="Ingresa tu sector"
                            />
                        </div>
                    )}
                </fieldset>

                {/* Información adicional */}
                <fieldset className="border-0 p-0 m-0">
                    <legend className="text-xl font-bold text-primary mb-4">
                        Información adicional
                    </legend>

                    {/* Problem to resolve */}
                    <TextareaField
                        label="¿Qué problema deseas resolver?"
                        name="problem_to_resolve"
                        value={formData.custom_fields.problem_to_resolve}
                        onChange={handleChange}
                        error={getFieldError('problem_to_resolve')}
                        rows={4}
                        helperText="Describe brevemente el problema o necesidad que tienes"
                        required
                        disabled={loading}
                    />

                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <SelectField
                            label="Etapa de compra"
                            name="purchase_stage"
                            options={purchaseStages}
                            value={formData.custom_fields.purchase_stage}
                            onChange={handleChange}
                            error={getFieldError('purchase_stage')}
                            placeholder="Selecciona tu etapa actual"
                            required
                            disabled={loading}
                        />

                        <SelectField
                            label="Cantidad de equipos"
                            name="amount_product"
                            options={equipmentQuantities}
                            value={formData.custom_fields.amount_product}
                            onChange={handleChange}
                            error={getFieldError('amount_product')}
                            placeholder="Selecciona la cantidad"

                            required
                            disabled={loading}
                        />
                    </div>
                </fieldset>

                {/* Honeypot field - hidden */}
                <input
                    type="text"
                    name="website"
                    value=""
                    onChange={() => { }}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                />

                {/* Submit button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="
            w-full px-6 py-3 bg-primary text-white rounded-xs
            font-bold hover:bg-secondary hover:text-primary transition-all duration-300
            disabled:opacity-50 disabled:cursor-not-allowed
            flex items-center justify-center gap-2 shadow-md
          "
                >
                    {loading ? (
                        <>
                            <LoadingSpinner size="small" color="white" />
                            Enviando...
                        </>
                    ) : (
                        'Enviar'
                    )}
                </button>
            </form>
        </div>
    );
}
