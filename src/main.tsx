import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HeroesApp } from "./HeroesApp.tsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </StrictMode>
);
