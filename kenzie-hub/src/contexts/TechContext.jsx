import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Loading } from "../components/Loading";
import { api } from "../services/api";

export const TechContext = createContext({});

export const TechContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem("@TOKEN:"));

  const [techsUser, setTechsUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    async function getTechs() {
      if (token) {
        try {
          const response = await api.get("/profile", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setTechsUser(response.data.techs);
        } catch (error) {
          console.log(error);
        }
      } else {
        navigate("/");
      }
      setIsLoading(false);
    }
    getTechs();
  }, []);

  const createTech = async (data) => {
    setIsLoading(true);
    try {
      const response = await api.post("/users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.success("Tecnologia adicionada");
      setTechsUser([
        ...techsUser,
        {
          id: response.data.id,
          title: response.data.title,
          status: response.data.status,
        },
      ]);
    } catch (error) {
      toast.error(error.response.data.message);
    }
    setIsLoading(false);
  };

  const deleteTech = async (tech_id) => {
    setIsLoading(true);
    try {
      const response = await api.delete(`/users/techs/${tech_id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const newTechs = techsUser.filter((tech) => tech.id !== tech_id);
      setTechsUser(newTechs);
      toast.success("Tecnologia excluída");
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const updateTech = async (tech_id, data) => {
    setIsLoading(true);
    try {
      const response = await api.put(`/users/techs/${tech_id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const newTechs = techsUser.filter((tech) => tech.id !== tech_id);
      setTechsUser([
        ...newTechs,
        {
          id: response.data.id,
          title: response.data.title,
          status: response.data.status,
        },
      ]);
      toast.success("Tecnologia atualizada");
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <TechContext.Provider
      value={{
        token,
        techsUser,
        setTechsUser,
        deleteTech,
        createTech,
        updateTech,
        isLoading,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
