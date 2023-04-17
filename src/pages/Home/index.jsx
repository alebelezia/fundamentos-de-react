import { useState } from 'react'
import './styles.css'

import {Card} from '../../components/Card'

export function Home() {
  const [count, setCount] = useState(0)
  const [studentName, setStudentName] = useState("") 
  //const [onde guardamos o conteúdo do estado, função que atualiza o estado] 

  return (
    <div className='container'>
      <h1>Nome: {studentName}</h1>
      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button>OK</button>

      <Card name="Alessandra" time="10:55:25" />
      <Card name="João" time="11:00:10" />
      <Card name="Ana" time="12:10:33" />
    </div>
  )
}