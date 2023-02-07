import axios from "axios";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Register } from "./components/Register";
import { AppRoutes } from "./routes";
import { api } from "./services/api";
import "../src/styles/GlobalStyles.css";

function App() {
  const [registerData, setRegisterData] = useState({
    name: "",
    password: "",
    email: "",
    bio: "",
    contact: "",
    course_module: "Primeiro módulo (Introdução ao Frontend)",
  });

  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
