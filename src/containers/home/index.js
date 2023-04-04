import React, { useState, useRef, } from "react"

import { useNavigate } from "react-router-dom"

import axios from 'axios'

import People from "../../assets/people.svg"

import Arrow from "../../assets/arrow.svg"

import H1 from "../../components/Title"

import ContainerItens from "../../components/ContainerItens"

import Button from "../../components/Button"


import {
  Container,
  Image,
  InputLabel,
  Input,
} from "./styles"

const App = () => {

  // const users = [];

  const [users, setUsers] = useState([]) // esse eh o REACT HOOK // aqui tem um ARRAY , primeiro posicao do array eh a variavel e a segunda pos, eh "set" + nome da variavel
  // a aplicacao inicial eh um array vazio " []"
  // um estado no React eh IMUTAVEL

  const navigate = useNavigate()

  const inputName = useRef()
  const inputAge = useRef()    // utiliar o useRef , eh muito melhor , so pega a informacao quando clikar no imput, e eu coloco o ref aonde quero                                  

  // REACT HOOKS  => FERRAMENTAS AUXILIARES 
  async function addNemUser() {

   const { data: newUser  } = await axios.post("http://localhost:3001/users", { 
      name: inputName.current.value, age: inputAge.current.value });

     setUsers([...users,
      newUser]);

      navigate("/usuarios") // com navigate , nao precisa mais o .push

         //{ id: Math.random(),
          // name: inputName.current.value, 
           //age: inputAge.current.value }]) // useState , ele tira a informacao atual e coloca uma nova
      // Spread operator  ==> ... ==> ele serve para fazer a soma no array + o objeto, antes tava tudo na mesma caixa , ele faz esparramar

     
  }

// REACT HOOK  =>  useEffect (efeito colateral)
// useEffect ==> parentezes, uma function dentro, e depois um [] array 
// assim que a pagina inicia , useEffect eh chamado
          //ou
//  quando um estado esta no ARRAY de dependencia do useEffect eh alterado

 /* useEffect(()=>{ // o useEffect nao aceita o async pra ajudar o await , entao tem que abrir uma nova function dentro dele

  async function fetchUsers(){
  const {data: newUsers} = await axios.get("http://localhost:3001/users")

  setUsers(newUsers)
}

fetchUsers()


},[]); */

 /* async function deleteUser(userId) {

    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter(user => user.id !== userId) // filter so retorna , se for true
    setUsers(newUsers);
  } */


  return (
    <Container>
      <Image alt="logo-image" src={People} />
      <ContainerItens>
        <H1>Ola</H1>

        <InputLabel> Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel> Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNemUser} >
          Cadastrar <img alt="seta" src={Arrow} />
        </Button>
        

      </ContainerItens>

    </Container>);

}

export default App