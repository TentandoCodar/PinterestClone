import React, {Fragment, useEffect, useState} from 'react';
import Header from '../components/Header';
import { Container, IconDivs, AlignIconsDiv,
  ProfileContainer, ProfileTexts, ProfileName,
  ProfileInformations, ProfileImage
} from './styles';
import { IoMdAdd } from 'react-icons/io';
import { MdEdit } from 'react-icons/md';
import { TiUpload } from 'react-icons/ti';
import './index.css';
import profileImage from '../../assets/profileImage.png';
import api from '../../services/api';
import { useSelector } from 'react-redux';
import SignUpImageForm from '../components/SignUpImageForm';
export default function Profile({history}) {
  const userData = useSelector(state => state.login.data);
  const [username, setUserName] = useState();
  const signUpImageFormIsOpen = useSelector(state => state.imageForm);
  useEffect(() => {
    const user = userData?.user
    
    setUserName(user?.name);
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token) {
      history.push('/');
    }
    else {
      if(userData?.user) {
        const user = userData?.user
    
        setUserName(user?.name);
      }
    }
  }, [userData])

  useEffect(() => {
    if(signUpImageFormIsOpen) {
      document.body.style.overflow = 'hidden';
    }
    else {
      document.body.style.overflow = 'auto';
    }
  }, [signUpImageFormIsOpen])

  return (
    <Fragment>
        <Header></Header>
        {signUpImageFormIsOpen && <SignUpImageForm></SignUpImageForm>}
        <Container>
          <IconDivs>
            <AlignIconsDiv>
              <IoMdAdd className="Icons" size={40} color="#777"></IoMdAdd>
              <MdEdit className="Icons" size={40} color="#777" ></MdEdit>
              <TiUpload className="Icons" size={40} color="#777" ></TiUpload>
            </AlignIconsDiv>
          </IconDivs>
          <ProfileContainer>
            <ProfileTexts>
              <ProfileName>{username}</ProfileName>
              <ProfileInformations>0 seguidores . 5 seguindo</ProfileInformations>
            </ProfileTexts>
            <ProfileImage src={profileImage}></ProfileImage>
          </ProfileContainer>
        </Container>
    </Fragment>
  );
}
