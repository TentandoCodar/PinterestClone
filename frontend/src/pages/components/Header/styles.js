import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  z-index: 1;
`;

export const Logo = styled.img`
    width: 30px;
    height: 30px;
    margin: 0 25px 0 10px;
    cursor: pointer;
`;

export const InputContainer = styled.div`
    height: 80%;
    background-color: #eee;
    width: 60%;
    border-radius: 8px;
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

export const Links = styled.a`
    font-size: 18px;
    font-weight: bold;
    color: ${props => props.color};
    margin-left: ${props => props.marginLeft ? props.marginLeft : 25};
    padding: 10px;
    cursor: pointer;
    border-radius: 20px;
    &:hover {
        background-color: #eee;
    }
`;



export const ProfileDiv = styled.div`
    width: 6%;
    padding: 10px;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
        background-color: #eee;
    }
`;

export const ProfileIcon = styled.span`
    border-radius: 200px;
    background-color: #999;
    color: #fff;
    padding: 6px;
`;

export const ProfileName = styled.span`
    font-size: 18px;
    color: #777;
    margin-left: 5px;
    padding-right: 15px;
`;

export const Separator = styled.div`
    border-right: 2px solid #ccc;
    color: #fff;
    margin-left: 1px;
    height: 80%;
`;
