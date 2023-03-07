import Login from "../../../pages/login";
import axios from "axios";
const authUrl = "http://localhost:8081/AuthAdm";

function getdataAdm() {
  axios
    .post(authUrl)
    .then((response) => {
      const data = response.data;
      console.log("dados do envio ====> ", data);
      return JSON.stringify(data);
    })
    .catch((error) => console.log(error.response.data));
}
//getdataAdm();

export default getdataAdm;
