import AppError from "../../shared/errors/AppError";

import axios from "axios";
const authUrl = "http://localhost:8081/AuthAdm";


const addAuth = {
  name: "Catarina Master",
  email: "catarina.m@gmail.com",
}

interface IAuthType {
  email: string;
  password: string;
}

interface IResponse {
  adm: IAuthType;
  token: string;
}

  class SendEndPointSessionService {
    public getUpdateUser() {
      // eslint-disable-next-line no-undef
      axios
        .put(`${authUrl}/id`, addAuth)
        .then((response) => {
          console.log(response.data);
          alert(JSON.stringify(response.data));
        })
        .catch((error) => console.log(error));
    }
    }
    
    export default SendEndPointSessionService
