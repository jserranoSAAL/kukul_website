# Usa una imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install --production

# Copia todo el proyecto al contenedor
COPY . .

# Compila la aplicación para producción
RUN npm run build

# Sirve la aplicación usando un servidor web estático
# En este caso, se usará `serve`, pero puedes usar cualquier servidor que prefieras.
RUN npm install -g serve

# Expone el puerto 3000 para que sea accesible fuera del contenedor
EXPOSE 3000

# Define el comando por defecto para ejecutar la aplicación
CMD ["serve", "-s", "build", "-l", "3000"]