import { useForm } from "react-hook-form";
import { StyledLink, StyledLoginForm } from "./style";
import logo from "../../assets/logo.png";

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
      <header>
        <img src={logo} alt="logo" />
      </header>

      <main>
        <h3>Login</h3>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Digite seu email"
          id="email"
          {...register("email", { required: true })}
        />

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          id="password"
          {...register("password", { required: true })}
        />

        <button type="submit">Entrar</button>

        <span>Ainda não possui uma conta?</span>

        <StyledLink to={"/register"}>
          <p>Cadastre-se</p>
        </StyledLink>
      </main>
    </StyledLoginForm>
  );
};
