import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { StyledModal } from "./style";
import { useForm } from "react-hook-form";
import { TechContext } from "../../contexts/TechContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    title: yup.string().required("Digite um nome para a tecnologia"),
    status: yup.string().required(),
  })
  .required();

export const AddTechModal = ({ modalOpen, setModalOpen }) => {
  const { createTech } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    createTech(data);
    setModalOpen(!modalOpen);
  };

  if (!modalOpen) return null;
  return (
    <StyledModal>
      <div>
        <p>Cadastrar tecnologia</p>
        <button onClick={() => setModalOpen(!modalOpen)}>X</button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title">Nome</label>
        <input
          type="text"
          placeholder="Digite o nome da tecnologia"
          id="title"
          {...register("title")}
        />
        <p>{errors.title?.message}</p>

        <label htmlFor="status">Selecionar Status</label>
        <select name="status" id="status" {...register("status")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>

        <button>Cadastrar tecnologia</button>
      </form>
    </StyledModal>
  );
};
