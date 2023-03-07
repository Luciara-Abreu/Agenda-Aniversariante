import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { ContainerButton } from './styles';
//import { auth } from '../../../../libs/firebase'
//import { signOut } from 'firebase/auth';
import { IUserType } from '../../../shared/interfaces/User';



type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> 

const ButtonsMenu = (props:Props) =>{   
  const [user, setUser] = useState<IUserType | null>(null);

  const setToken = (token: string) => {
    localStorage.setItem('authToken', token);
}


  const history = useNavigate(); 
  const handleClickHome = () => {
    history('/Dashboard')
  }  
  
  const handleClickAddAniver = () => {
    history('/addAniver')
  }  

  const handleClickTop10 = () => {
    history('/Top10')
  }  

  const handleClickConsultaMes = () => {
    history('/consultaMes')
  }  

  const handleLogout = async () => {
  }
  
  /*const handleLogout = async () => {
    await signOut(auth).then(() => {
      setUser(null);
      setToken('');
      history('/')
    })
    if (localStorage.getItem("auth") !== null) {
      console.log('Usuário logadaço ===>',auth)
  }else {
    console.log('Usuário deslogadaço ===>', user)
  }   }
*/

  return (
<ContainerButton>
<button {...props}  className="btn third" onClick={handleClickHome}>DashBoard</button>
<button {...props}  className="btn third" onClick={handleClickTop10}>Top 10</button>
<button {...props}  className="btn third" onClick={handleClickConsultaMes}>Consulta Mes</button>
<button {...props}  className="btn third" onClick={handleClickAddAniver}>Add Aniver</button>
<button {...props}  className="btn third" onClick={handleLogout}> Sair</button>

</ContainerButton>
  )}


export default ButtonsMenu

/**
 * {auth !== null && (
  <button {...props}  className="btn third" onClick={handleLogout}> Sair</button>
  )}
 */