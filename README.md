# Proyecto NOC

El objetivo es crear una serie de tareas usando Arquitectura Limpia con TypeScript

# instalar
- npm init -y (para crear el package.json)
- npm i -D typescript @types/node ts-node-dev rimraf (instalar typescript)
- npx tsc --init --outDir dist/ --rootDir src (crear un directorio de salida)
- npm i dotenv (para manejar las variables de entorno)
- npm i env-var (para parsear las variables de entorno y tiparlas)

# dev
1. Clonar el archivo .env.template a .env
2. Configurar las variablles de entorno
```
PORT=3000

MAILER_EMAIL=soporte@devtalles.com
MAILER_SECRET_KEY=123456
PROD=true
```
