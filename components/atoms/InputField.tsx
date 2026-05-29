/**
 * InputField Component
 * Input reutilizable con label, error y validación
 * 
 * Soporta dos variantes:
 * - 'light' (default): Para fondos claros/blancos
 * - 'dark': Para fondos oscuros (aplica colores claros para texto y bordes)
 * 
 * Ejemplo de uso:
 * <InputField label="Nombre" name="name" variant="dark" />
 */

'use client';

import { InputHTMLAttributes, TextareaHTMLAttributes, forwardRef } from 'react';

interface BaseInputProps {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  helperText?: string;
  containerClassName?: string;
  variant?: 'light' | 'dark';
}

type InputFieldProps = BaseInputProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'name'>;

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      label,
      name,
      error,
      required = false,
      helperText,
      containerClassName = '',
      className = '',
      type = 'text',
      variant = 'light',
      ...props
    },
    ref
  ) => {
    const hasError = !!error;
    const isDark = variant === 'dark';

    // Colores dinámicos según el variant
    const labelClasses = isDark ? 'text-white' : 'text-primary';
    const inputTextClasses = isDark ? 'text-white' : 'text-gray-900';
    const placeholderClasses = isDark ? 'placeholder-gray-400' : 'placeholder-gray-400';
    const inputBgClasses = isDark ? 'bg-white/5' : 'bg-white';
    const borderClasses = hasError
      ? 'border-red-400 focus:ring-red-400/40 focus:border-red-400'
      : isDark
        ? 'border-white/20 hover:border-white/40'
        : 'border-gray-200 hover:border-primary/30';
    const disabledClasses = isDark ? 'disabled:bg-white/5' : 'disabled:bg-gray-50';
    const helperTextClasses = isDark ? 'text-gray-300' : 'text-gray-500';

    return (
      <div className={containerClassName}>
        <label htmlFor={name} className={`block text-sm font-semibold mb-1.5 ${labelClasses}`}>
          {label}
          {required && <span className="text-secondary ml-1">*</span>}
        </label>

        <input
          ref={ref}
          type={type}
          id={name}
          name={name}
          required={required}
          className={`
            w-full px-4 py-2.5 border rounded-sm
            ${inputTextClasses} ${placeholderClasses} ${inputBgClasses}
            transition-colors
            focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary
            ${disabledClasses} disabled:cursor-not-allowed
            ${borderClasses}
            ${className}
          `}
          aria-invalid={hasError}
          aria-describedby={
            error ? `${name}-error` : helperText ? `${name}-helper` : undefined
          }
          {...props}
        />

        {helperText && !error && (
          <p id={`${name}-helper`} className={`mt-1 text-sm ${helperTextClasses}`}>
            {helperText}
          </p>
        )}

        {error && (
          <p id={`${name}-error`} className="mt-1 text-sm text-red-400" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export default InputField;

/**
 * TextareaField Component
 * Textarea reutilizable con label, error y validación
 */
type TextareaFieldProps = BaseInputProps &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'name'>;

export const TextareaField = forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
  (
    {
      label,
      name,
      error,
      required = false,
      helperText,
      containerClassName = '',
      className = '',
      rows = 4,
      variant = 'light',
      ...props
    },
    ref
  ) => {
    const hasError = !!error;
    const isDark = variant === 'dark';

    // Colores dinámicos según el variant
    const labelClasses = isDark ? 'text-white' : 'text-primary';
    const textareaTextClasses = isDark ? 'text-white' : 'text-gray-900';
    const placeholderClasses = isDark ? 'placeholder-gray-400' : 'placeholder-gray-400';
    const textareaBgClasses = isDark ? 'bg-white/5' : 'bg-white';
    const borderClasses = hasError
      ? 'border-red-400 focus:ring-red-400/40 focus:border-red-400'
      : isDark
        ? 'border-white/20 hover:border-white/40'
        : 'border-gray-200 hover:border-primary/30';
    const disabledClasses = isDark ? 'disabled:bg-white/5' : 'disabled:bg-gray-50';
    const helperTextClasses = isDark ? 'text-gray-300' : 'text-gray-500';

    return (
      <div className={containerClassName}>
        <label htmlFor={name} className={`block text-sm font-semibold mb-1.5 ${labelClasses}`}>
          {label}
          {required && <span className="text-secondary ml-1">*</span>}
        </label>

        <textarea
          ref={ref}
          id={name}
          name={name}
          rows={rows}
          required={required}
          className={`
            w-full px-4 py-2.5 border rounded-sm
            ${textareaTextClasses} ${placeholderClasses} ${textareaBgClasses}
            transition-colors resize-y
            focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary
            ${disabledClasses} disabled:cursor-not-allowed
            ${borderClasses}
            ${className}
          `}
          aria-invalid={hasError}
          aria-describedby={
            error ? `${name}-error` : helperText ? `${name}-helper` : undefined
          }
          {...props}
        />

        {helperText && !error && (
          <p id={`${name}-helper`} className={`mt-1 text-sm ${helperTextClasses}`}>
            {helperText}
          </p>
        )}

        {error && (
          <p id={`${name}-error`} className="mt-1 text-sm text-red-400" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

TextareaField.displayName = 'TextareaField';

/**
 * SelectField Component
 * Select dropdown reutilizable
 */
interface SelectOption {
  value: string;
  label: string;
}

interface SelectFieldProps {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  helperText?: string;
  containerClassName?: string;
  variant?: 'light' | 'dark';
  options: SelectOption[];
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
}

export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  (
    {
      label,
      name,
      error,
      required = false,
      helperText,
      options,
      placeholder = 'Selecciona una opción',
      containerClassName = '',
      className = '',
      variant = 'light',
      ...props
    },
    ref
  ) => {
    const hasError = !!error;
    const isDark = variant === 'dark';

    // Colores dinámicos según el variant
    const labelClasses = isDark ? 'text-white' : 'text-primary';
    const selectTextClasses = isDark ? 'text-white' : 'text-gray-900';
    const selectBgClasses = isDark ? 'bg-white/5' : 'bg-white';
    const borderClasses = hasError
      ? 'border-red-400 focus:ring-red-400/40 focus:border-red-400'
      : isDark
        ? 'border-white/20 hover:border-white/40'
        : 'border-gray-200 hover:border-primary/30';
    const disabledClasses = isDark ? 'disabled:bg-white/5' : 'disabled:bg-gray-50';
    const helperTextClasses = isDark ? 'text-gray-300' : 'text-gray-500';

    return (
      <div className={containerClassName}>
        <label htmlFor={name} className={`block text-sm font-semibold mb-1.5 ${labelClasses}`}>
          {label}
          {required && <span className="text-secondary ml-1">*</span>}
        </label>

        <select
          ref={ref}
          id={name}
          name={name}
          required={required}
          className={`
            w-full px-4 py-2.5 border rounded-sm
            ${selectTextClasses} ${selectBgClasses}
            transition-colors
            focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary
            ${disabledClasses} disabled:cursor-not-allowed
            ${borderClasses}
            ${className}
          `}
          aria-invalid={hasError}
          aria-describedby={
            error ? `${name}-error` : helperText ? `${name}-helper` : undefined
          }
          {...props}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {helperText && !error && (
          <p id={`${name}-helper`} className={`mt-1 text-sm ${helperTextClasses}`}>
            {helperText}
          </p>
        )}

        {error && (
          <p id={`${name}-error`} className="mt-1 text-sm text-red-400" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

SelectField.displayName = 'SelectField';
