// index.js
import fetch from "node-fetch";

// Definimos métodos y recursos válidos
const VALID_METHODS = ["GET", "POST", "DELETE"];
const RESOURCES = ["products"];

const [,, method, resource, ...args] = process.argv;

const BASE_URL = "https://fakestoreapi.com";

// 🔎 Validaciones iniciales
if (!VALID_METHODS.includes(method)) {
  console.error(`Método inválido: ${method}. Métodos permitidos: ${VALID_METHODS.join(", ")}`);
  process.exit(1);
}

if (!RESOURCES.includes(resource.split("/")[0])) {
  console.error(`Recurso inválido: ${resource}. Recursos permitidos: ${RESOURCES.join(", ")}`);
  process.exit(1);
}

// 🚀 Función principal
async function main() {
  try {
    if (method === "GET" && resource === "products") {
      // GET todos los productos
      const res = await fetch(`${BASE_URL}/products`);
      const data = await res.json();
      console.log("Lista de productos:", data);

    } else if (method === "GET" && resource.startsWith("products/")) {
      // GET producto por ID
      const productId = resource.split("/")[1];
      const res = await fetch(`${BASE_URL}/products/${productId}`);
      const data = await res.json();
      console.log(`Producto ${productId}:`, data);

    } else if (method === "POST" && resource === "products") {
      // POST nuevo producto
      const [title, price, category] = args;
      if (!title || !price || !category) {
        console.log("Debes ingresar: <title> <price> <category>");
        return;
      }

      const res = await fetch(`${BASE_URL}/products`, {
        method: "POST",
        body: JSON.stringify({
          title,
          price: parseFloat(price),
          category
        }),
        headers: { "Content-Type": "application/json" }
      });
      const data = await res.json();
      console.log("✅ Producto creado:", data);

    } else if (method === "DELETE" && resource.startsWith("products/")) {
      // DELETE producto
      const productId = resource.split("/")[1];
      const res = await fetch(`${BASE_URL}/products/${productId}`, { method: "DELETE" });
      const data = await res.json();
      console.log(`🗑️ Producto ${productId} eliminado:`, data);

    } else {
      console.log("⚠️ Comando no válido. Usa:");
      console.log(" npm run start GET products");
      console.log(" npm run start GET products/<id>");
      console.log(" npm run start POST products <title> <price> <category>");
      console.log(" npm run start DELETE products/<id>");
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}

main();
