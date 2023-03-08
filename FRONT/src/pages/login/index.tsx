import cake from "../../shared/assets/Gifs/cake2.gif";
import * as S from "./styles";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
const authUrl = "http://localhost:8081/AuthAdm";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useNavigate();
  const handleClick = () => {
    history("/criarConta");
  };

  const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const eventData = {
    email,
    password,
  };

  const getdataAdm = async () => {
    const response = await axios.post(authUrl, eventData);
    const data = response.data;
    if (!data) {
      alert(data);
    }
    localStorage.setItem("Token", JSON.stringify(data.token));
    localStorage.setItem("Name", JSON.stringify(data.adm.name));
    localStorage.setItem(
      "sexualOrientation",
      JSON.stringify(data.adm.sexualOrientation)
    );
    console.log(
      "sexualOrientation ====> ",
      JSON.stringify(data.adm.sexualOrientation)
    );
    return JSON.stringify(data);
  };

  const handleSendAuthenticationAdm = () => {
    const messageError = "E-mail ou senha invalida, Entre com seus dados";
    try {
      getdataAdm();
      history("/Dashboard");
    } catch (error) {
      console.log(messageError);
      alert(messageError);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    //console.log("submit");
  };

  return (
    <S.Container>
      <S.ContainerLogin>
        <S.WrapLogin>
          <S.LoginForm>
            <S.LoginFormTitle>
              Bem vindo ao App de Aniversariantes
            </S.LoginFormTitle>
            <S.DivLogo>
              <S.LogoForm>
                <img src={cake} alt="CakeNiver" />
              </S.LogoForm>
            </S.DivLogo>

            <form className="form" onSubmit={handleSubmit}>
              <S.ContainerInput>
                <S.WrapInput>
                  <input
                    className={email !== "" ? "has-val input" : "input"}
                    type="email"
                    value={email}
                    onChange={handleEmailInput}
                  />
                  <span className="FocusInput" data-placeholder="Email"></span>
                </S.WrapInput>

                <S.WrapInput>
                  <input
                    className={password !== "" ? "has-val input" : "input"}
                    type="password"
                    value={password}
                    onChange={handlePasswordInput}
                  />
                  <span
                    className="FocusInput"
                    data-placeholder="Password"
                  ></span>
                </S.WrapInput>
              </S.ContainerInput>

              <S.ContainerLoginFormBtn className="actions">
                <button
                  onClick={handleSendAuthenticationAdm}
                  className="login-form-btn"
                  type="submit"
                >
                  Login
                </button>
              </S.ContainerLoginFormBtn>
            </form>

            <S.CriarConta className="text-criarConta">
              <div className="txt1">Não possui conta?</div>
              <button onClick={handleClick} className="txt2">
                Criar Conta
              </button>
            </S.CriarConta>
          </S.LoginForm>
        </S.WrapLogin>
      </S.ContainerLogin>
    </S.Container>
  );
};

export default Login;

//  <AuthGoogle />
