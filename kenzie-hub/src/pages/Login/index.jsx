import logo from "../../assets/logo.png";
import { StyledLink, StyledLoginForm } from "./style";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";

const formSchema = yup
  .object({
    email: yup.string().email("Email invalido").required("Digite seu email"),
    password: yup.string().required("Digite sua senha"),
  })
  .required();

export const Login = () => {
  const { setLoggedUser } = useContext(LoginContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await api.post("/sessions", data);
      localStorage.setItem("@TOKEN:", JSON.stringify(response.data.token));
      localStorage.setItem("@USERID:", JSON.stringify(response.data.user.id));
      setLoggedUser(response.data.user);
      toast.success("Logado com sucesso");
      navigate("/home");
    } catch (error) {
      toast.error("Dados incorretos. Tente novamente");
    }
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
