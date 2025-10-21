import { useState } from 'react'
import './App.css'
import card from /components/cards.jsx 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-black p-4 rounded-3xl'>Tailwind test</h1>
    <card />
    </>
  )
}

export default App
