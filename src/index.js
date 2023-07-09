import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const root = createRoot(document.getElementById("root")); // SetUp react-dom root
root.render(<App />); // Actual Injection of component
