import { useState } from 'react'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Lista de Presença</h1>
      <input type="text" />
      <button>OK</button>
    </>
  )
}

export default Home
