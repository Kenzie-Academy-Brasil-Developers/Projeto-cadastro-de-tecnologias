import { StyledDash, StyledLink } from "./style";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useState } from "react";
import { AddTechModal } from "../../components/AddTechModal";
import { TechContext } from "../../contexts/TechContext";
import { DeleteAndAttModal } from "../../components/DeleteAndAttModal";
import { Loading } from "../../components/Loading";

export const Dashboard = () => {
  const { loggedUser, userLogout } = useContext(UserContext);
  const { token, techsUser, setTechsUser, isLoading } = useContext(TechContext);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalInfoOpen, setModalInfoOpen] = useState(false);
  const [selectedTech, setSelectedTech] = useState(null);

  if (isLoading) {
    return <Loading />;
  }

  if (loggedUser) {
    return (
      <StyledDash>
        <nav>
          <img src={logo} alt="" />
          <StyledLink to={"/"} onClick={userLogout}>
            <p>Sair</p>
          </StyledLink>
        </nav>

        <header>
          <p>Olá {loggedUser.name}</p>
          <span>{loggedUser.course_module}</span>
        </header>

        <main>
          <div>
            <p>Tecnologias</p>
            <button onClick={() => setModalOpen(true)}>Adicionar</button>
          </div>

          <ul>
            {loggedUser.techs
              ? techsUser.map((tech) => {
                  return (
                    <li
                      key={tech.id}
                      onClick={() => {
                        setSelectedTech(tech);
                        setModalInfoOpen(true);
                      }}
                    >
                      <p>{tech.title}</p>
                      <span>{tech.status}</span>
                    </li>
                  );
                })
              : null}
          </ul>
        </main>

        <AddTechModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        <DeleteAndAttModal
          modalInfoOpen={modalInfoOpen}
          setModalInfoOpen={setModalInfoOpen}
          selectedTech={selectedTech}
        />
      </StyledDash>
    );
  }
};
