import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Cache bust: v2
createRoot(document.getElementById("root")!).render(<App />);
