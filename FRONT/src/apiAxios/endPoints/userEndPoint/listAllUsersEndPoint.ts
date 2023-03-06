import axios from "axios";
const listUsersUrl = "http://localhost:8081/ListAllAnivers";

class EndpointListAllUser {
  public getListUsers() {
    axios
      .get(listUsersUrl)
      .then((response) => {
        const data = response.data;
        const textContent = JSON.stringify(data);
        console.log(textContent);
      })
      .catch((error) => console.log(error));
  }
}
export default EndpointListAllUser;
