import React, {useState} from 'react';

import { Container, FormContainer, Title, Input, SubmitButton } from './styles';
import api from '../../../services/api'; 
export default function SignUpImageForm() {
    const [name, setName] = useState();
    const [description,setDescription] = useState();
    const [file,setFile] = useState();

    async function submit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('file', file);
        const id = localStorage.getItem('id');
        formData.append('owner_id', id);
        api.post('/picture', formData).then((resp) => {

        }).catch((err) => {

        });
    }

    return (
        <Container>
            <FormContainer>
                <Title>Cadastre sua imagem</Title>
                <Input onChange={(e) => {setName(e.target.value)}} placeholder="Nome"></Input>
                <Input onChange={(e) => {setDescription(e.target.value)}} placeholder="Descrição"></Input>
                <Input onChange={(e) => setFile(e.target.files[0])} type="file" placeholder="Arquivo"></Input>
                <SubmitButton onClick={(e) => {submit(e)}}>Cadastrar</SubmitButton>
            </FormContainer>
        </Container>
    );
}
