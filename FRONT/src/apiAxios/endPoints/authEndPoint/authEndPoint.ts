import axios from "axios";
const authUrl = "http://localhost:8081/AuthAdm";


const addAuth = {
  name: "Catarina Master",
  email: "catarina.m@gmail.com",
}

class EndpointListAllUser {
public getUpdateUser() {
  // eslint-disable-next-line no-undef
  axios
    .put(`${updateUserUrl}/id`, addAuth)
    .then((response) => {
      console.log(response.data);
      alert(JSON.stringify(response.data));
    })
    .catch((error) => console.log(error));
}
}

export default EndpointListAllUser
