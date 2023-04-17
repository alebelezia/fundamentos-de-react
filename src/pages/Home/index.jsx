import { useState } from 'react'
import './styles.css'

import {Card} from '../../components/Card'

export function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <h1>Lista de Presença</h1>
      <input type="text" />
      <button>OK</button>

      <Card />
      <Card />
      <Card />
    </div>
  )
}