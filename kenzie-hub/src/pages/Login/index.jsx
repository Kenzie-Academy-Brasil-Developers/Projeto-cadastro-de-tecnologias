import logo from "../../assets/logo.png";
import { StyledLink, StyledLoginForm } from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../components/Input";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const formSchema = yup
  .object({
    email: yup.string().email("Email invalido").required("Digite seu email"),
    password: yup.string().required("Digite sua senha"),
  })
  .required();

export const Login = () => {
  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (data) => {
    userLogin(data);
  };

  return (
    <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
      <header>
        <img src={logo} alt="logo" />
      </header>

      <main>
        <h3>Login</h3>
        <Input
          label="Email"
          id="email"
          placeholder="Digite seu email"
          type="email"
          {...register("email")}
          error={errors.email?.message}
        />

        <Input
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
          error={errors.password?.message}
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
