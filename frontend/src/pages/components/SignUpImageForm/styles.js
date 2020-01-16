import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    align-items:center;
    z-index: 100000;
    justify-content: center;
`;


export const FormContainer = styled.form`
    display:flex;
    flex-direction: column;
    height: 100%;
    max-height: 400px;
    padding: 60px;
    width: 100%:
    max-width: 400px;
    border-radius: 5px;
    background-color: #fff;
    align-items:center;
`;

export const Title = styled.h1`
    font-size: 30px;
    color: #333;
    font-weight: bold;
`;

export const Input = styled.input`
    width: 80%;
    padding: 10px;
    border-radius: 5px;
    background: transparent;
    border: 1px solid #333;
    margin-top: 20px;
`;

export const SubmitButton = styled.button`
    width: 85%;
    padding: 10px;
    background: #e60023;
    color: #fff;
    border: 0;
    margin-top: 25px;
    border-radius: 5px;
`;
