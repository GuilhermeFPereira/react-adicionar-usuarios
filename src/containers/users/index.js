import React, { useState, useEffect } from "react"

import { useNavigate } from "react-router-dom"

import axios from 'axios'

import Avatar from "../../assets/avatar.svg"

import Arrow from "../../assets/arrow.svg"

import Trash from "../../assets/trash.svg"

import H1 from "../../components/Title"

import ContainerItens from "../../components/ContainerItens"

import Button from "../../components/Button"

import {
  Container,
  Image,
  User
} from "./styles"

const Users = () => {

  // const users = [];

  const [users, setUsers] = useState([]) // esse eh o REACT HOOK // aqui tem um ARRAY , primeiro posicao do array eh a variavel e a segunda pos, eh "set" + nome da variavel
  // a aplicacao inicial eh um array vazio " []"
  // um estado no React eh IMUTAVEL          
  
  const navigate = useNavigate()

  // REACT HOOKS  => FERRAMENTAS AUXILIARES 

// REACT HOOK  =>  useEffect (efeito colateral)
// useEffect ==> parentezes, uma function dentro, e depois um [] array 
// assim que a pagina inicia , useEffect eh chamado
          //ou
//  quando um estado esta no ARRAY de dependencia do useEffect eh alterado

useEffect(()=>{ // o useEffect nao aceita o async pra ajudar o await , entao tem que abrir uma nova function dentro dele

  async function fetchUsers(){
  const {data: newUsers} = await axios.get("http://localhost:3001/users")

  setUsers(newUsers)
}

fetchUsers()
},[]); 

  async function deleteUser(userId) {

    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter(user => user.id !== userId) // filter so retorna , se for true
    setUsers(newUsers);
  }

  function goBackPage(){
    navigate("/")

  }
  // PROPS ==> Propriedades
  return (
    <Container>
      <Image alt="logo-image" src={Avatar} />
      <ContainerItens isBlur={true} >
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (

            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="lata de lixo" />
              </button>
            </User>

            

          ))}

        </ul>

        
        <Button isBack={true} onClick={goBackPage} >
        <img alt="seta" src={Arrow} /> voltar 
        </Button>

      </ContainerItens>

    </Container>);

}

export default Users