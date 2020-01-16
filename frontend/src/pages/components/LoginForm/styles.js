import styled from 'styled-components';

const width = window.innerWidth;
const height = window.innerHeight;

export const Container = styled.div`
    height: ${height}px;
    width: ${width}px;
    display:flex;
    flex-direction: row;
    background-color: rgba(0,0,0,0.5);
    align-items: center;
    justify-content: center;
    position: absolute;
`;

export const LoginContainer = styled.div`
    height: 100%;
    max-height: 500px;
    width: 100%;
    max-width: 400px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    display:flex;
    flex-direction:column;
    align-items: center;
    text-align: center;
`;

export const Logo = styled.img`
    width: 50px;
    height: 50px;
    margin-top: 10px;
`;

export const FormTitle = styled.h1`
    font-size: 30px;
    color: #333;
    font-weight: bold;
`;

export const Input = styled.input`
    width: 60%;
    padding: 10px;
    border: 1px solid #999;
    background: transparent;
    color: #333;
    border-radius: 4px;
    margin-bottom: 10px;
`;

export const ForgotPassword = styled.a`
    color: #555;
    font-weight: bold;
    font-size: 14px;
`;

export const Button = styled.button`
    background-color: ${props => props.color ? props.color : "#fff"};
    color: ${props => props.color ? "#fff" : "#000"};
    padding: 10px;
    border-radius: 5px;
    margin-top: 10px;
    border: ${props => props.color ? 0 : "1px solid #333"};
    width: 65%;

    &:hover {
        color: ${props => props.color ? "#fff" : "#fff"};
        background-color: ${props => props.color ? "#d50c22" : "#000"};
        transition: 500ms;
    }
`;

export const Or = styled.p`
    font-size: 14px;
    font-weight: bold;
    color: #333;
`;
