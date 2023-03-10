import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ContainerButton } from './styles'
import { IUserType } from '../../../shared/interfaces/User'

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const ButtonsMenu = (props: Props) => {
  const [user, setUser] = useState<IUserType | null>(null)
  const [token, setToken] = useState(null)

  const auth = localStorage.getItem('Token')

  const history = useNavigate()

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

  const existTokn = localStorage.getItem('TokenStorage')
  const handleLogout = () => {
    if (existTokn) {
      setUser(null)
      setToken(null)
      localStorage.clear()
      history('/')
    }
    if (localStorage.getItem('auth') !== null) {
      console.log('Usuário logadaço ===>', auth)
    } else {
      console.log('Usuário deslogadaço com sussesso!')
      alert('Usuário deslogadaço com sussesso!')
    }
  }

  return (
    <ContainerButton>
      <button {...props} className="btn third" onClick={handleClickHome}>
        DashBoard
      </button>
      <button {...props} className="btn third" onClick={handleClickTop10}>
        Top 10
      </button>
      <button {...props} className="btn third" onClick={handleClickConsultaMes}>
        Consulta Mes
      </button>
      <button {...props} className="btn third" onClick={handleClickAddAniver}>
        Add Aniver
      </button>
      {existTokn && (
        <button {...props} className="btn third" onClick={handleLogout}>
          {' '}
          Sair
        </button>
      )}
    </ContainerButton>
  )
}

export default ButtonsMenu
