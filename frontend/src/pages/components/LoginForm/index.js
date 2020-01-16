import React, {useState} from 'react';
import api from '../../../services/api';
import { Container, LoginContainer, Logo, FormTitle, Input, 
    ForgotPassword, Button, Or } from './styles';
import logo from '../../../assets/logo.png';
import {withRouter} from 'react-router-dom';
import {useDispatch} from 'react-redux';
function LoginForm({history}) {
    const [create, setCreate] = useState(false);
    const [buttonContent, setButtonContent] = useState("Entrar");
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const dispatch = useDispatch();
    async function created() {
        setCreate(!create);
        setButtonContent(create ? "Entrar": "Criar");
    }

    async function submit() {
        if(create) {
            api.post('/user', {
                name,
                email,
                password
            }).then((resp) => {
                setName("");
                setEmail("");
                setPassword("");
                setCreate(false);
            }).catch((err) => {
                //present error log
            })
        }
        else {
            if(!email && !name) {
                //Apresentar o log de que ele precisa preencher um usuario
            }
            else {
                api.post('/login', {
                    nameOrEmail: email,
                    password
                }).then((resp) => {
                   const token = resp.data.token;
                   const id = resp.data.user.id;
                   
                   localStorage.setItem('token',token);
                   localStorage.setItem('id', id);
                   dispatch({type: 'LOGIN', user: resp.data});
                }).catch((err) => {
                    console.log(err);
                })
            }
        }
    }

    return (
        <Container>
            <LoginContainer>
                <Logo src={logo}></Logo>
                <FormTitle>Bem-vindo(a) ao <br></br>Pinterest</FormTitle>
                {create && <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome"></Input>}
                <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail ou Username"></Input>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha"></Input>
                <ForgotPassword>Esqueceu sua senha?</ForgotPassword>
                <Button onClick={() => submit()} color="#e60023">{buttonContent}</Button>
                <Or>Ou</Or>
                <Button onClick={() => {created()}}>{!create ? "Crie uma conta" : "Entre na sua conta"}</Button>
            </LoginContainer>
        </Container>
    );
}

export default withRouter(LoginForm)
