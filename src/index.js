import React from "react";
import { createRoot } from "react-dom/client";
import NoteApp from "./pages/NoteApp";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.css";

const root = createRoot(document.getElementById("root"));
root.render(<NoteApp />);
