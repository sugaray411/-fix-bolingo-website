import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

// The "artifact" build runs inside a hosted preview frame that can't serve
// path routes, so routing is kept in memory there. A plain #token in the
// link (e.g. #services) opens that page.
const routes = ["about", "services", "products", "projects", "contact"];
const start = routes.includes(location.hash.slice(1)) ? `/${location.hash.slice(1)}` : "/";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {import.meta.env.MODE === "artifact" ? (
      <MemoryRouter initialEntries={[start]}>
        <App />
      </MemoryRouter>
    ) : (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )}
  </StrictMode>,
);
