import { StyledLink, StyledRegisterForm } from "./style";
import logo from "../../assets/logo.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const Register = ({ setRegisterData, registerData }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

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
          {...register("name", { required: true })}
        />

        <label htmlFor="formEmail">E-mail</label>
        <input
          type="email"
          placeholder="Digite aqui seu email"
          id="formEmail"
          {...register("email", { required: true })}
        />

        <label htmlFor="formPassword">Senha</label>
        <input
          type="password"
          placeholder="Digite aqui sua senha"
          id="formPassword"
          {...register("password", { required: true })}
        />

        <label htmlFor="formConfirmPassword">Confirmar senha</label>
        <input
          type="password"
          placeholder="Confirme sua senha"
          id="formConfirmPassword"
        />

        <label htmlFor="formBio">Bio</label>
        <input
          type="text"
          placeholder="Fale sobre você"
          id="formBio"
          {...register("bio", { required: true })}
        />

        <label htmlFor="formContact">Contato</label>
        <input
          type="text"
          placeholder="Opção de contato"
          id="formContact"
          {...register("contact", { required: true })}
        />

        <label htmlFor="selectModule">Selecionar módulo</label>
        <select
          name=""
          id="selectModule"
          {...register("course_module", { required: true })}
        >
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
