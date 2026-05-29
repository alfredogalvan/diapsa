# Desarrolla un componente para el formulario de producto

## Parámetros
1. `product` usando la interfaz `ProductDetail`

```ts
interface Props {
    product: ProductDetail | undefined
}
```

## Campos cuando no se pasa el parámetro `product`

### Obligatorios
- `name` - tipo string 
- `phone` - tipo string
- `company` - tipo string
- `email` - tipo string

### custom_fields
JSON que contiene los siguientes valores:

- `sector` - select con opciones (usa el componente `<SelectField>`)
  - Oil & Gas
  - Petroquímica 
  - Manufactura
  - Energía
  - Minería 
  - Alimentos
  - Otro (si es "Otro", debe especificar cuál)

- `problem_to_resolve` - textarea (usa el componente `<TextAreaField>`)

- `purchase_stage` - select con opciones:
  - Investigando Opciones
  - Evaluando Proveedores 
  - Listo para comprar 
  - Tengo presupuesto aprobado

- `job_title` - tipo string

 cuando se pasa el parámetro `product` se deben agregar los siguientes campos, estos campos deben ser de solo lectura y deben autocompletarse con la informacion:

- `product` - nombre del producto
- `brand` - marca del producto
- `category` - categoría del producto


revisa como se mandan el formularios de desde [Contacto General](../../components/organisms/ContactFormGeneral.tsx) para que lo tomes de ejemplo

Si tienes duda has preguntas de como hacer la tarea 

Después de hacer la tarea y asegurarse que esta completada correctamente, debe ser indicado por mi, agrega la documentacion  de este formulario a la [documentacion](../FRONTEND_API_DOCS.md)