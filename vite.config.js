import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist"
  }
});
``` |
| `index.html` | Estrutura HTML mínima:  

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>BTC Futures PRO</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
``` |

---

### **2️⃣ Pasta `public/`**

| Ficheiro | Conteúdo / Observações |
|----------|-----------------------|
| `icon.png` | Ícone 192×192 do BTC (qualquer imagem) |

---

### **3️⃣ Pasta `src/`**

| Ficheiro | Conteúdo / Observações |
|----------|-----------------------|
| `main.jsx` | Entrada React:  

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
