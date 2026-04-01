import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// import "./index.css"; <--- Is line ko hata do (delete it)

createRoot(document.getElementById("root")!).render(<App />);
