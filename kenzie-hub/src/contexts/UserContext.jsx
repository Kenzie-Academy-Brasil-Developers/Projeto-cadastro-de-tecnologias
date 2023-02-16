import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("@TOKEN:"));
  const [loggedUser, setLoggedUser] = useState({});

  useEffect(() => {
    async function getLoggedUser() {
      if (token) {
        try {
          const response = await api.get("/profile", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setLoggedUser(response.data);
          navigate("/home");
        } catch (error) {
          console.log(error);
          localStorage.clear();
        }
      }
    }
    getLoggedUser();
  }, []);

  const userLogin = async (data) => {
    try {
      const response = await api.post("/sessions", data);
      localStorage.setItem("@TOKEN:", JSON.stringify(response.data.token));
      localStorage.setItem("@USERID:", JSON.stringify(response.data.user.id));
      setLoggedUser(response.data.user);
      toast.success("Logado com sucesso");
      navigate("/home");
    } catch (error) {
      toast.error("Dados incorretos. Tente novamente");
    }
  };

  const userRegister = async (data) => {
    delete data.passwordConfirm;

    try {
      await api.post("/users", data);
      toast.success("Conta criada com sucesso!");
      navigate("/");
    } catch (error) {
      if (error.response.data.message.toString() == "Email already exists")
        toast.error("Email já cadastrado");
    }
  };

  const userLogout = () => {
    setLoggedUser({});
    localStorage.clear();
    toast.warning("Você saiu");
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        loggedUser,
        token,
        setLoggedUser,
        navigate,
        userLogin,
        userRegister,
        userLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
