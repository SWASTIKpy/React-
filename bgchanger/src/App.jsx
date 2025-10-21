import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  const handleColorChange = (newColor) => {
    console.log('Changing color to:', newColor);
    setColor(newColor);
  }

  return (
    <div className="fixed inset-0 transition-colors duration-200" style={{backgroundColor: color}}>
      <div className='fixed bottom-12 inset-x-0 px-2 pointer-events-none'>
        <div className='mx-auto max-w-fit pointer-events-auto flex gap-3 shadow-md bg-white px-3 py-2 rounded-2xl z-50 ring-1 ring-gray-100'>
          <button onClick={() => handleColorChange('red')} className='px-4 py-1 rounded-full text-white' style={{backgroundColor: 'red'}}>Red</button>
          <button onClick={() => handleColorChange('green')} className='px-4 py-1 rounded-full text-white' style={{backgroundColor: 'green'}}>Green</button>
          <button onClick={() => handleColorChange('blue')} className='px-4 py-1 rounded-full text-white' style={{backgroundColor: 'blue'}}>Blue</button>
          <button onClick={() => handleColorChange('yellow')} className='px-4 py-1 rounded-full text-black' style={{backgroundColor: 'amber'}}>Amber</button>
          <button onClick={() => handleColorChange('purple')} className='px-4 py-1 rounded-full text-white' style={{backgroundColor: 'violet'}}>Purple</button>
        </div>
      </div>
    </div>
  )
}

export default App
