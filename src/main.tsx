import "./main.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { CV } from "./cv";
// import { CV } from "./cv-ru";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CV />
  </StrictMode>,
);
