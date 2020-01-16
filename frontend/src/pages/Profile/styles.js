import styled from 'styled-components';
const width = window.innerWidth;
const height = window.innerHeight;

export const Container = styled.div`
    width: ${width}px;
    height: ${height - 100}px;
`;

export const IconDivs = styled.div`
    width: 100%:
    margin-left: 65px;
    
`;

export const AlignIconsDiv = styled.div`
    background: #fff;
    margin-left: 300px;
`;

export const ProfileContainer = styled.div`
    margin-left: 300px;
    display:flex;
    flex-direction: row;
    margin-top: 50px;
    align-items: center;
`;

export const ProfileTexts = styled.div`
    display:flex;
    flex-direction: column;
    
`;

export const ProfileName = styled.h1`
    color: #333;
    font-weight: bold;
    margin-left: 20px;
`;

export const ProfileInformations = styled.h4`
    color: #333;
    font-weight: bold;
    margin-top: 0px;
    margin-left: 20px;
    font-size: 18px;
`;

export const ProfileImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 100px;
    margin-left: 400px;
`;
