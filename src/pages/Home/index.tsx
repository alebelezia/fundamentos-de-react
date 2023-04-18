//Hooks: São funções que permitem conectar os recursos de estados e ciclos de vida do React a partir de componentes funcionais. Normalmente os Hooks iniciam com a palavra use por convenção. Exemplos de hooks: useState, useEffect.

import { useState, useEffect } from 'react'
import './styles.css'

import {Card, CardProps} from '../../components/Card'

type ProfileResponse = {
  name: string;
  avatar_url: string;
}

type User = {
  name: string;
  avatar: string;
}

export function Home() {
    //const [onde guardamos o conteúdo do estado, função que atualiza o estado]
  const [count, setCount] = useState(0)
  const [studentName, setStudentName] = useState("") 
  const [students, setStudents] = useState<CardProps[]>([])
  const [user, setUser] = useState<User>({} as User)

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    }
    setStudents((prevState) => [...prevState, newStudent]);
  }

  //Hook useEffect é executado automaticamente assim que a interface for renderizada
  useEffect(() => {
    //Corpo do useEffect
    console.log("useEffect foi chamado!")

    async function fetchData() {
      const response = await fetch('https://api.github.com/users/alebelezia');
      const data = await response.json() as ProfileResponse;

      setUser({
        name: data.name,
        avatar: data.avatar_url,
      });
    }
    fetchData();

  }, [students]);
  //Os arrays definem quais são os estados que o useEffect depende.
  //Se o array estiver vazio, o useEffect é executado apenas uma vez (na renderização da página). Se o array estiver com estados, ele será executado na renderização da página e em toda vez que houver mudanças nos estados (no caso, quando houver alteração no estado de 'students')

  return (
    <div className='container'>
      <header>
        <h1>Lista de Presença</h1>
        <div>
        <strong>{user.name}</strong>
        <img src={user.avatar} alt="Foto de perfil" />
        </div>
      </header>

      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>

      {
        students.map((student) => (
          <Card key={student.time} name={student.name} time={student.time} />
        ))
      }
    </div>
  )
}