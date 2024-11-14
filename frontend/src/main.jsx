import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ImgContextProvider from "./context/ImgContextProvider.jsx";

createRoot(
  document.getElementById("root")
).render(
  <ImgContextProvider>
    <App />
  </ImgContextProvider>
);
