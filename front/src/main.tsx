import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/home/index.tsx";
import "../src/styles/index.css";
import { CalculatorProvider } from "./contexts/calculatorContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CalculatorProvider>
      <App />
    </CalculatorProvider>
  </React.StrictMode>
);
