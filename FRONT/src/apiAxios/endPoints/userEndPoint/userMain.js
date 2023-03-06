const listUsersUrl = "http://localhost:8081/ListAllAnivers";
const listOneUseUrl = "http://localhost:8081/Aniver/";
const createUserUrl = "http://localhost:8081/AddAniver";
const updateUserUrl = "http://localhost:8081/UpdateAniver/";
const deleteUserUrl = "http://localhost:8081/DeleteAniver/";

const newUSer = {
  name: "Catarina Master",
  birthDate: "1994-11-23",
  sexualOrientation: "F",
  email: "catarina.m@gmail.com",
  lastEmail: "-",
  fone: "21 1231111123",
};

function getCreateUser() {
  // eslint-disable-next-line no-undef
  axios
    .post(createUserUrl, newUSer)
    .then((response) => {
      console.log(response.data);
      alert(JSON.stringify(response.data));
    })
    .catch((error) => console.log(error));
}
getCreateUser();
//---------------------------------------------------------
function getListUsers() {
  // eslint-disable-next-line no-undef
  axios
    .get(listUsersUrl)
    .then((response) => {
      const data = response.data;
      // eslint-disable-next-line no-undef
      renderResultMes.textContent = JSON.stringify(data);
      //console.log(data);
    })
    .catch((error) => console.log(error));
}
getListUsers();

//---------------------------------------------------------
function getListOneUser() {
  // eslint-disable-next-line no-undef
  axios.get(listOneUseUrl).then().catch();
}
//getListOneUser();
//---------------------------------------------------------
const editUser = {
  name: "Catarina Master",
  birthDate: "1994-11-23",
  sexualOrientation: "F",
  email: "catarina.m@gmail.com",
  lastEmail: "-",
  fone: "21 1231111123",
};

function getUpdateUser() {
  // eslint-disable-next-line no-undef
  axios
    .put(`${updateUserUrl}/id`, editUser)
    .then((response) => {
      console.log(response.data);
      alert(JSON.stringify(response.data));
    })
    .catch((error) => console.log(error));
}
//getUpdateUser();
//---------------------------------------------------------
function getDeleteUser() {
  // eslint-disable-next-line no-undef
  axios.get(deleteUserUrl).then().catch();
}
//getDeleteUser();
//---------------------------------------------------------

//export default {}
