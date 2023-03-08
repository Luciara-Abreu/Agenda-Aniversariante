import React, { useState } from "react";
import * as S from "./styles";
import ButtonsMenu from "../buttons/buttonsMenu";
// https://youtu.be/AXKc4WhgLSA - criar header com typeScript

const Header: React.FC = () => {
  const sexualOrientation = () => {
    const data = localStorage.getItem("sexualOrientation");
    if (data === "F" || "f") {
      return "Bem vinda!!";
    }
    return "Bem vindo!!";
  };
  const orientation = sexualOrientation();

  const user = localStorage.getItem("Name");

  return (
    <S.HeaderContainer>
      <S.ContainerUp>
        <S.Title>**AGENDA ANIVERSARIANTES **</S.Title>
        <p>
          {orientation} {user}!
        </p>
      </S.ContainerUp>
      <S.ContainerMenu>
        <ButtonsMenu />
      </S.ContainerMenu>
    </S.HeaderContainer>
  );
};

export default Header;
