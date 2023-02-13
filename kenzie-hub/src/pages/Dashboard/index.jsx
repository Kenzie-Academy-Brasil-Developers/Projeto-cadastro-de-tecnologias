import { StyledDash, StyledLink } from "./style";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";

export const Dashboard = () => {
  const { setLoggedUser, loggedUser } = useContext(LoginContext);
  const navigate = useNavigate();

  const logout = () => {
    setLoggedUser({});
    localStorage.clear();
    toast.warning("Você saiu");
    navigate("/");
  };

  if (loggedUser) {
    return (
      <StyledDash>
        <nav>
          <img src={logo} alt="" />
          <StyledLink to={"/"} onClick={logout}>
            <p>Sair</p>
          </StyledLink>
        </nav>

        <header>
          <p>Olá {loggedUser.name}</p>
          <span>{loggedUser.course_module}</span>
        </header>

        <main>
          <h3>Que pena! Estamos em desenvolvimento</h3>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </main>
      </StyledDash>
    );
  }
};
