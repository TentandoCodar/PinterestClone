import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './index.css';
import { FaSearch, FaBell } from 'react-icons/fa';
import { AiFillMessage } from 'react-icons/ai';
import { MdMoreHoriz } from 'react-icons/md';
import logo from '../../../assets/logo.png';
import { Container, Logo , InputContainer, 
  Input, Links, ProfileDiv, ProfileIcon,
  ProfileName, Separator
} from './styles';
import {withRouter} from 'react-router-dom';
import api from '../../../services/api';


function Header({history}) {
  const [username, setUsername] = useState("");
  const userData = useSelector(state => state.login?.data);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token) {
      if(userData?.user) {
        const user = userData?.user;
        setUsername(user.name);
      }
    }
    
  }, [userData])
  

  return (
    <Container>
      <Logo onClick={() => history.push('/')} src={logo}></Logo>
      <InputContainer>
        <FaSearch style={{marginLeft: 15}} size={20} color="#999"></FaSearch>
        <Input placeholder="Pesquisar"></Input>
      </InputContainer>
      <Links marginLeft="20px" color="#333">Pagina inicial</Links>
      <Links marginLeft="10px" color="#777">Seguindo</Links>
      <ProfileDiv onClick={() => history.push('/profile')}>
            <ProfileIcon>{username.substring(0,1)}</ProfileIcon>
            <ProfileName>{username}</ProfileName>
      </ProfileDiv>
      <Separator>ssda</Separator>
      <AiFillMessage className="iconsHover" style={{marginLeft:25}} color="#999" size={25}></AiFillMessage>
      <FaBell className="iconsHover" style={{marginLeft:12}} color="#999" size={25}></FaBell>
      <MdMoreHoriz className="iconsHover" style={{marginLeft: 12}} color="#999" size={25}></MdMoreHoriz>

    </Container>
  );
}

export default withRouter(Header);
