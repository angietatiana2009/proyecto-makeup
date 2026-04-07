import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx"; // Importa tu componente principal

// Aquí es donde React se conecta con el HTML (index.html)
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);