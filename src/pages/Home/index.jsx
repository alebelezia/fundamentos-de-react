import { useState } from 'react'
import './styles.css'

export function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <h1>Lista de Presença</h1>
      <input type="text" />
      <button>OK</button>
    </div>
  )
}