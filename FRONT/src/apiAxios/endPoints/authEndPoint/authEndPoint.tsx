function AuthAdm() {
  const admToken = localStorage.getItem("token");
  console.log("AQUI O TOKEN ====> ", admToken);
}
AuthAdm();

export default AuthAdm;
