import { StyledLink, StyledRegisterForm } from "./style";
import logo from "../../assets/logo.png";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import { toast } from "react-toastify";

const formSchema = yup
  .object({
    name: yup.string().required("Preencha seu nome"),
    email: yup.string().email("Email inválido").required("Preencha seu email"),
    password: yup
      .string()
      .required("Digite uma senha")
      .matches(/.{8,}/, "Deve conter no mínimo 8 caracteres")
      .matches(/(\W|_)/, "Deve conter no mínimo 1 caracter especial")
      .matches(/(\d)/, "Deve conter ao menos 1 número"),
    passwordConfirm: yup
      .string()
      .required("Confirmação da senha necessária")
      .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
    bio: yup.string().required("Preencha sua bio"),
    contact: yup.string().required("Preencha seu contato"),
  })
  .required();

export const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (data) => {
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

  return (
    <StyledRegisterForm onSubmit={handleSubmit(onSubmit)}>
      <header>
        <img src={logo} alt="" />
        <StyledLink to={`/`}>
          <p>Voltar</p>
        </StyledLink>
      </header>

      <main>
        <div>
          <h3>Crie sua conta</h3>
          <span>Rápido e grátis</span>
        </div>

        <label htmlFor="formName">Nome</label>
        <input
          type="text"
          placeholder="Digite aqui seu nome"
          id="formName"
          {...register("name")}
        />
        <span>{errors.name?.message}</span>

        <label htmlFor="formEmail">E-mail</label>
        <input
          type="email"
          placeholder="Digite aqui seu email"
          id="formEmail"
          {...register("email")}
        />
        <span>{errors.email?.message}</span>

        <label htmlFor="formPassword">Senha</label>
        <input
          type="password"
          placeholder="Digite aqui sua senha"
          id="formPassword"
          {...register("password")}
        />
        <span>{errors.password?.message}</span>

        <label htmlFor="formConfirmPassword">Confirmar senha</label>
        <input
          type="password"
          placeholder="Confirme sua senha"
          id="formConfirmPassword"
          {...register("passwordConfirm")}
        />
        <span>{errors.passwordConfirm?.message}</span>

        <label htmlFor="formBio">Bio</label>
        <input
          type="text"
          placeholder="Fale sobre você"
          id="formBio"
          {...register("bio")}
        />
        <span>{errors.bio?.message}</span>

        <label htmlFor="formContact">Contato</label>
        <InputMask
          type="text"
          placeholder="Opção de contato"
          id="formContact"
          mask="(99) 99999-9999"
          {...register("contact")}
        />
        <span>{errors.contact?.message}</span>

        <label htmlFor="selectModule">Selecionar módulo</label>
        <select name="" id="selectModule" {...register("course_module")}>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo (Frontend Avançado)
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo (Backend Avançado)
          </option>
        </select>

        <button type="submit">Cadastrar</button>
      </main>
    </StyledRegisterForm>
  );
};
