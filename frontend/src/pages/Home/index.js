import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import { Container, Image } from './styles';
export default function Home() {
  const [isLogued, setIsLogued] = useState(false);
  const [token, setToken] = useState("");
  const dispatcher = useDispatch();
  const data = useSelector(state => state.pictures.data)
  const isCallLogin = useSelector(state => state.login.data);
  useEffect(() => {
    localStorage.removeItem('token');
    getToken()
    dispatcher({type: 'ASYNC_INIT', data: {token: token}});
  },[])

  

  async function getToken() {
    const token = localStorage.getItem('token');
    if(!token) {
      setIsLogued(false);
    }
    else {
      setIsLogued(true);
    }
  }

  useEffect(() => {
    getToken();
  }, [isCallLogin])
  
  

  function renderItemsCondition() {
    if(isLogued && data.length > 0) {
      return true;
    }
    else {
      return false;
    }
  }

  return (
    <div>
      {isLogued && <Header></Header>}
      {!isLogued && <LoginForm></LoginForm>}
      <Container >
        {data && data.pictures?.map(picture => {
          const path = picture.path.replace("localhost:5000","http://c3cc64bf.ngrok.io")
          return (
            <Image key={picture.id} src={path}></Image>
          )
        })}
      </Container>
      
    </div>
  );
}
