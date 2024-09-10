# Proyecto con React, particles.js y tsparticles

Este es un proyecto de ejemplo que combina React con las librerías particles.js y tsparticles para crear un fondo animado de partículas en una aplicacion web.

## Requisitos previos

Asegúrate de tener instalado Node.js y npm en tu sistema antes de continuar.

## Instalación

Sigue los siguientes pasos para configurar y ejecutar el proyecto localmente:

1. **Clonar el repositorio**

   Clone este repositorio en su máquina local ejecutando el siguiente comando en su terminal:

```bash
git clone https://gitlab.com/dacost.dev/react-particles-background.git
```

2. **Instalar dependencias**

Navegue al directorio del proyecto e instale las dependencias ejecutando:

```bash
cd react-particles-background
npm install
```

## Configuración

El proyecto ya viene preconfigurado para utilizar tanto particles.js como tsparticles. Puedes personalizar la configuración de las partículas modificando los archivos de configuración correspondientes:

1. **Configuración de particles.js**

particles.js utiliza un archivo de configuración llamado `particles.json` ubicado en `src/components/Background/`. Puedes ajustar las propiedades de las partículas editando este archivo.

2. **Configuración de tsparticles**

tsparticles utiliza el componente `Background` ubicado en `src/components/Background/Background.js`. Puedes modificar las opciones de las partículas editando este archivo

## Ejecutar la aplicación

Para iniciar la aplicación en modo de desarrollo, ejecuta:

```bash
npm start
```

La aplicación se abrirá automáticamente en tu navegador en `http://localhost:3000`.

## Créditos

Este proyecto utiliza las siguientes librerías:

- React: [https://reactjs.org/](https://reactjs.org/)
- particles.js: [https://github.com/VincentGarreau/particles.js/](https://github.com/VincentGarreau/particles.js/)
- tsparticles: [https://github.com/matteobruni/tsparticles](https://github.com/matteobruni/tsparticles)

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.
