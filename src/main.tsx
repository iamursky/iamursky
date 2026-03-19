import "./main.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { CV } from "./cv";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CV />
  </StrictMode>,
);
