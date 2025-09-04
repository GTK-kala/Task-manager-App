import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Contextprovider from "./context/Contextprovider.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Contextprovider>
        <App />
      </Contextprovider>
    </BrowserRouter>
  </StrictMode>
);
