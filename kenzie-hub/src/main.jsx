import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { TechContextProvider } from "./contexts/TechContext";
import { UserContextProvider } from "./contexts/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <TechContextProvider>
          <App />
        </TechContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
