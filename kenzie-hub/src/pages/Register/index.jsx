import { StyledLink, StyledRegisterForm } from "./style";
import logo from "../../assets/logo.png";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const Register = ({ setRegisterData, registerData }) => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Preencha seu nome"),
    email: yup.string().email("Email inválido").required("Preencha seu email"),
    password: yup
      .string()
      .required("Digite uma senha")
      .matches(
        "^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$",
        "Senha deve conter no mínimo 8 caracteres com pelo menos 1 letra maiúscula, 1 letra mínuscula, 1 número e um caractere especial"
      ),
    passwordConfirm: yup
      .string()
      .required("Confirmação da senha necessária")
      .oneOf([yup.ref("password")], "A senha deve ser igual"),
    bio: yup.string().required("Preencha sua bio"),
    contact: yup.string().required("Preencha seu contato"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  console.log(errors);
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
        <input
          type="text"
          placeholder="Opção de contato"
          id="formContact"
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
