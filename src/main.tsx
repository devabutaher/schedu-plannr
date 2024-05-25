import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Toaster } from "./components/ui/toaster.tsx";
import "./index.css";
import AllProvider from "./providers/AllProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AllProvider>
      <App />
      <Toaster />
    </AllProvider>
  </React.StrictMode>
);
