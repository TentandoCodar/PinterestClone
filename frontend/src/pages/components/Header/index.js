import React from 'react';
import { FaSearch } from 'react-icons/fa';
import logo from '../../../assets/logo.png';
import { Container, Logo , InputContainer, Input } from './styles';

export default function Header() {
  return (
    <Container>
      <Logo src={logo}></Logo>
      <InputContainer>
        <FaSearch style={{marginLeft: 15}} size={20} color="#999"></FaSearch>
        <Input placeholder="Pesquisar"></Input>
      </InputContainer>
    </Container>
  );
}
