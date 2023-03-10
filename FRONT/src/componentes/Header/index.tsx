import React from 'react'
import * as S from './styles'
import ButtonsMenu from '../buttons/buttonsMenu'
// https://youtu.be/AXKc4WhgLSA - criar header com typeScript

const Header: React.FC = () => {
  const data = localStorage.getItem('sexualOrientationStorage')

  const sexualOrientation = () => {
    const data = localStorage.getItem('sexualOrientationStorage')
    const a = 'Bem vinda!!'
    const o = 'Bem vindo!!'
    
    if (data != 'M' && data  != 'm') {
      return a
    } else {
      return o
    }
  }
  const orientation = sexualOrientation()

  const user = localStorage.getItem('NameStorage')

  return (
    <S.HeaderContainer>
      <S.ContainerUp>
        <S.Title>**AGENDA ANIVERSARIANTES **</S.Title>
        <p>
          {orientation} {user}
        </p>
      </S.ContainerUp>
      <S.ContainerMenu>
        <ButtonsMenu />
      </S.ContainerMenu>
    </S.HeaderContainer>
  )
}

export default Header
