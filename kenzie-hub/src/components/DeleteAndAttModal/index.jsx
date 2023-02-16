import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { StyledInfoModal } from "./style";
import { useForm } from "react-hook-form";
import { TechContext } from "../../contexts/TechContext";

export const DeleteAndAttModal = ({
  modalInfoOpen,
  setModalInfoOpen,
  selectedTech,
}) => {
  const { deleteTech, updateTech } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    await updateTech(selectedTech.id, data);
    setModalInfoOpen(false);
  };

  const handleDeleteTech = async (id) => {
    await deleteTech(id);
    setModalInfoOpen(false);
  };

  if (!modalInfoOpen) return null;
  return (
    <StyledInfoModal>
      <div>
        <p>Tecnologia Detalhes</p>
        <button onClick={() => setModalInfoOpen(!modalInfoOpen)}>X</button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title">Nome</label>
        <input
          type="text"
          id="title"
          defaultValue={selectedTech.title}
          readOnly
        />

        <label htmlFor="status">Selecionar Status</label>
        <select name="status" id="status" {...register("status")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>

        <div className="buttons__div">
          <button className="save__button">Salvar alterações</button>
          <button
            type="button"
            className="delete__button"
            onClick={() => handleDeleteTech(selectedTech.id)}
          >
            Excluir
          </button>
        </div>
      </form>
    </StyledInfoModal>
  );
};
