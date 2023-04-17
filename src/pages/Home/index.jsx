//Hooks: São funções que permitem conectar os recursos de estados e ciclos de vida do React a partir de componentes funcionais. Normalmente os Hooks iniciam com a palavra use por convenção. Exemplos de hooks: useState, useEffect.

import { useState, useEffect } from 'react'
import './styles.css'

import {Card} from '../../components/Card'

export function Home() {
  const [count, setCount] = useState(0)
  const [studentName, setStudentName] = useState("") 
  //const [onde guardamos o conteúdo do estado, função que atualiza o estado]
  const [students, setStudents] = useState([]);

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
  }, [students]);
  //Os arrays definem quais são os estados que o useEffect depende.
  //Se o array estiver vazio, o useEffect é executado apenas uma vez (na renderização da página). Se o array estiver com estados, ele será executado na renderização da página e em toda vez que houver mudanças nos estados (no caso, quando houver alteração no estado de 'students')

  return (
    <div className='container'>
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>Alessandra</strong>
          <img src="https://github.com/alebelezia.png" alt="Foto de perfil" />
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