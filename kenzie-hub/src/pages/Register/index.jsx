import { StyledLink, StyledRegisterForm } from "./style";
import logo from "../../assets/logo.png";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputMask from "react-input-mask";
import { Input } from "../../components/Input";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

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
  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (data) => {
    userRegister(data);
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
        <div className="form__top">
          <h3>Crie sua conta</h3>
          <span>Rápido e grátis</span>
        </div>

        <Input
          label="Nome"
          type="text"
          placeholder="Digite aqui seu nome"
          id="name"
          {...register("name")}
          error={errors.name?.message}
        />

        <Input
          label="Email"
          type="email"
          placeholder="Digite aqui seu email"
          id="email"
          {...register("email")}
          error={errors.email?.message}
        />

        <Input
          label="Senha"
          type="password"
          placeholder="Digite aqui sua senha"
          id="password"
          {...register("password")}
          error={errors.password?.message}
        />

        <Input
          label="Confirmar senha"
          type="password"
          placeholder="Digite sua senha novamente"
          id="passwordConfirm"
          {...register("passwordConfirm")}
          error={errors.passwordConfirm?.message}
        />

        <Input
          label="Bio"
          type="text"
          placeholder="Fale sobre você"
          id="bio"
          {...register("bio")}
          error={errors.bio?.message}
        />

        <label htmlFor="contact">Contato</label>
        <InputMask
          label="Contato"
          type="text"
          placeholder="Digite aqui seu contato"
          id="contact"
          mask="+55 (99) 99999-9999"
          {...register("contact")}
          error={errors.contact?.message}
        />

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
