import logo from "../../assets/logo.png";
import { StyledLink, StyledLoginForm } from "./style";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

const formSchema = yup
  .object({
    email: yup.string().email("Email invalido").required("Digite seu email"),
    password: yup.string().required("Digite sua senha"),
  })
  .required();

export const Login = ({ loggedUser, setLoggedUser }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (data) => {
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
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Digite seu email"
          id="email"
          {...register("email", { required: true })}
        />
        <p>{errors.email?.message}</p>

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          id="password"
          {...register("password", { required: true })}
        />
        <p>{errors.password?.message}</p>

        <button type="submit">Entrar</button>

        <span>Ainda não possui uma conta?</span>

        <StyledLink to={"/register"}>
          <p>Cadastre-se</p>
        </StyledLink>
      </main>
    </StyledLoginForm>
  );
};
