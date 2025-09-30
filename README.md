📂 Pre-Entrega de Proyecto - Node.js

Este proyecto es una herramienta de línea de comandos (CLI) para gestionar productos de una tienda en línea, utilizando la API pública de FakeStoreAPI
.

El objetivo es integrar todo lo aprendido en Node.js: manejo de argumentos (process.argv), consumo de APIs con fetch, uso de ESModules y lógica dinámica desde la terminal.

⚙️ Requerimientos Técnicos

Node.js v18+

npm para la gestión del proyecto

Dependencias:

node-fetch

🚀 Instalación y Configuración

Clona este repositorio o descarga el proyecto:

git clone <url-del-repo>
cd backend-pre-entrega


Inicializa el proyecto e instala dependencias:

npm init -y
npm install node-fetch


Asegúrate de que en tu package.json tengas configurado:

{
  "type": "module",
  "scripts": {
    "start": "node index.js"
  }
}

📌 Comandos Disponibles
🔎 Consultar todos los productos
npm run start GET products

🔎 Consultar un producto específico
npm run start GET products/<id>


Ejemplo:

npm run start GET products/15

➕ Crear un nuevo producto
npm run start POST products <title> <price> <category>


Ejemplo:

npm run start POST products "T-Shirt-Rex" 300 remeras

🗑️ Eliminar un producto
npm run start DELETE products/<id>


Ejemplo:

npm run start DELETE products/7

🛠️ Estructura del Proyecto
📦 pre-entrega-proyecto
 ┣ 📜 index.js        # Lógica principal (router + fetch API)
 ┣ 📜 package.json    # Configuración npm y script start
 ┣ 📜 README.md       # Documentación del proyecto

✅ Validaciones

Métodos válidos: GET, POST, DELETE

Recursos válidos: products

Validación de argumentos faltantes en comandos POST

Manejo de errores en requests fallidas

✨ Ejemplo de Uso
$ npm run start GET products/1

📦 Producto 1: {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  category: "men's clothing"
}
