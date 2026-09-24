# ASENERG

Landing de una sola página para ASENERG, una empresa ficticia de asesoramiento energético. El objetivo es que una persona o un negocio en España solicite una consulta gratuita para entender mejor su factura de luz y gas.

Prueba técnica para Grupo EMAX.

## Tecnología

React 19 y Vite. El estilo es CSS propio, con variables en `src/styles/`, sin Tailwind ni Bootstrap. Los iconos vienen de Lucide.

No hay backend. El formulario se valida en el navegador y el envío es simulado: si los datos son válidos, muestra un mensaje de confirmación.

## Organización

Cada sección de la página es un componente en `src/components/`: cabecera, hero, problema, solución, beneficios, cómo funciona, formulario y pie.

Los textos que se repiten viven fuera de los componentes:

- `src/data/benefits.js` — los cuatro beneficios
- `src/data/steps.js` — los pasos de Solución y de Cómo funciona

La validación y el estado del formulario están en `src/hooks/useContactForm.js`. `ContactForm.jsx` solo pinta los campos.

## Uso de IA

Usé la IA como apoyo para ordenar la estructura, proponer textos y preparar la especificación. El resultado lo revisé y lo ajusté yo: el panel del hero según el diseño en Figma, la misma promesa en los botones de conversión y el menú móvil, que bloquea el scroll y se cierra al pulsar fuera.

## Decisiones de diseño

La página tiene una sola acción: solicitar la consulta gratuita. El recorrido es entender, analizar y mejorar. No hay porcentajes de ahorro, precios, testimonios ni garantías, porque la prueba no aporta esos datos y una asesoría no puede prometer un descuento cerrado.

La paleta es azul marino (`#102A43`) para la marca, verde (`#22C55E`) para los botones y cian (`#22D3EE`) como acento. La tipografía es Inter. El hero no usa una foto de stock: muestra un panel de análisis, con la potencia contratada, un recargo y la comparación entre la facturación actual y la propuesta.

El layout es mobile first. Por debajo de 768 px todo va en una columna; desde 768 px se adapta a tablet y desde 1024 px a escritorio. En escritorio los beneficios pasan a cuatro columnas y el formulario queda al lado del texto.

## Cómo verla

```bash
npm install
npm run dev
```

La vista de producción se genera con `npm run build` y se abre con `npm run preview`. El proyecto está preparado para publicarse en Vercel o Netlify.
