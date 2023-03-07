import cake from "../../shared/assets/Gifs/cake2.gif";
import * as S from "./styles";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppError from "../../shared/errors/AppError";
import sendAuthAdm from "../../apiAxios/endPoints/authEndPoint/authEndPoint";

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

  /**  
    const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("submit ==> ", e.target);
  };
   */

  function getdataAdm() {
    axios
      .post(authUrl, eventData)
      .then((response) => {
        const data = response.data;
        console.log("dados do envio ====> ", data);
        return JSON.stringify(data);
      })
      .catch((error) => console.log(error.response.data));
  }
  getdataAdm();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("submit ==> ", e.target);
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
                  //onClick={handleSubmit}
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
