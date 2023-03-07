import axios from "axios";
const listAdmssUrl = "http://localhost:8081/ListAllAdm";

function getAdms() {
  axios
    .get(listAdmssUrl)
    .then((response) => {
      const data = response.data;
      console.log(JSON.stringify(data));
      //resnderResult.textContent = JSON.stringify(data)
    })
    .catch((error) => console.log(error));
}
getAdms();
