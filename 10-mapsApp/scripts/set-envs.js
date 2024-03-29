// Importa las funciones 'writeFileSync' y 'mkdirSync' del módulo 'fs'
// para manipular archivos y directorios.
const { writeFileSync, mkdirSync } = require('fs');

// Importa y carga las variables de entorno desde un archivo .env en el directorio actual.
require('dotenv').config();

// Define la ruta donde se creará o sobrescribirá el archivo de configuración de entornos.
const targetPath = './src/environments/environment.ts';

// Contenido del archivo de configuración de entornos,
// de Mapbox desde las variables de entorno.
const envFileContent = `
export const environment = {
  mapbox_key: "${ process.env['MAPBOX_KEY'] }",
  otra: "PROPIEDAD",
};
`;

// Crea el directorio 'src/environments' si no existe, incluyendo
// la creación de directorios padres de forma recursiva.
mkdirSync('./src/environments', { recursive: true });

// Escribe o sobrescribe el archivo de configuración de entornos
// con el contenido definido en 'envFileContent'.
writeFileSync( targetPath, envFileContent );
