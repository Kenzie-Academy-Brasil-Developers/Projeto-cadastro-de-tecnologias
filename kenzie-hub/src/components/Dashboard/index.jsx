import { StyledDash, StyledLink } from "./style";
import logo from "../../assets/logo.png";

export const Dashboard = () => {
  return (
    <StyledDash>
      <nav>
        <img src={logo} alt="" />
        <StyledLink to={"/"}>
          <p>Sair</p>
        </StyledLink>
      </nav>

      <header>
        <p>Ola samuel</p>
        <span>Primeiro módulo (Introdução ao Frontend)</span>
      </header>

      <main>
        <h3>Que pena! Estamos em desenvolvimento</h3>
        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </main>
    </StyledDash>
  );
};
