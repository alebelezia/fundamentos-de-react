//Hooks: São funções que permitem conectar os recursos de estados e ciclos de vida do React a partir de componentes funcionais. Normalmente os Hooks iniciam com a palavra use por convenção. Exemplos de hooks: useState, useEffect.

import { useState } from 'react'
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

  return (
    <div className='container'>
      <h1>Nome: {studentName}</h1>
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