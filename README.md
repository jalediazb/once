

## scripts
- Develop: `npm run serve`
- Build: `npm run build`

### Código que se muestra o ejecuta en Desarrollo o Producción

```
{% if estado.environment == "production" %}
    Producción
{% else %}
    Desarrollo
{% endif %}
```

## Información de la Plantilla

### CSS y JS personalizado
- Custom Css en `./_includes/custom.css`
- Custom Js en `./_includes/scripts.js`

### Featured Imagen para artículos y páginas
- Existen una imagen genérica para post y páginas si no se especifica nada.
- Se puede cambiar la imagen por defecto en la cabecera del md.
- Si queremos que no se muestre imagen genérica se vacia el contenido de la etiqueta featuredImage

### Menu y botones Navbar
- Elementos del menu principal como elementos en config.json
- Bonotes en navbar como elementos en config.json

### Navbar logo
Se puede utilizar tanto en SVG (modificando la nav.njk) o la url de una imagen cambiando config.json

### Error 404

Para determinados hosting (No Github o Netlify) es necesario crear un fichero .htaccess

`ErrorDocument 404 /404.html`

### Ad Blocks

Edit in eleventy.js

## ES Modules

Para usar ES Modules buscar paquete en [https://www.skypack.dev/](https://www.skypack.dev/).

## Next

- paginate tag pages



