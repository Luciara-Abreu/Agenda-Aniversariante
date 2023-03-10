import { useNavigate } from "react-router";
import { useState } from "react";
import { IUserType } from "../shared/interfaces/User";

import axios from "axios";
const authUrl = "http://localhost:8081/AuthAdm";

interface IToken {
  token: string;
}

export const useApi = () => {
  const [user, setUser] = useState<IUserType | null>(null);
  const [token, setToken] = useState<IToken | null>(null);

  const history = useNavigate();

   const useApi = () => {

   const signIn = async (email: string, password: string) => {
    const response = await axios.post(authUrl, { email, password });
    const data = response.data;
    localStorage.setItem("signinStorage", JSON.stringify(data));

    if (localStorage.getItem("response") !== null) {
      console.log("usuário =====>", data);
    }
    return response;
  };

/* const signout: async () => {
  await signOut('auth');
    }
  */
}
}

export default useApi