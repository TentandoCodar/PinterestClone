import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid #ccc;
  padding: 10px;
`;

export const Logo = styled.img`
    width: 30px;
    height: 30px;
    margin: 0 25px 0 10px;
`;

export const InputContainer = styled.div`
    height: 80%;
    background-color: #eee;
    width: 50%;
    border-radius: 5px;
    display:flex;
    flex-direction:row;
    align-items:center;
`;

export const Input = styled.input`
    color: #999;
    font-size: 14px;
    border: 0;
    background-color: transparent;
    margin-left: 12px;
    font-weight: bold;
    paddgin: 5px;
    width: 100%;
    height: 100%;
`;
