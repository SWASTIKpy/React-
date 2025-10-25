import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllow, setNumberAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [pass, setPass] = useState("")

  //ref hook

  const passwordRef = useRef(null)

  const passGen = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllow) str += "0123456789"
    if(charAllow) str += "!@#$%^&*-+_=`~"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPass(pass)

  }, [length, numAllow, charAllow, setPass])

  const copyPassToClipBo = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 42) 
    window.navigator.clipboard.writeText(pass)
  }, [pass])

  useEffect(() => {
    passGen()
  }, [length, numAllow, charAllow, passGen]) 
  return (
    <>
      <div className='w-full max-w-full mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-600'>
        <h1 className='text-2xl font-bold text-center py-4'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={pass}
        className='outline-none py-1 px-3'
        placeholder='Generated Password'
        readOnly
        ref={passwordRef}
        />
        <button 
        onClick={() => {copyPassToClipBo(); alert("Password Copied to Clipboard")}}
        className='outline-none bg-blue-400
         text-white px-3 py-0.5 shrink-0'>copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={8}
          max={42}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        checked={charAllow}
        id='charInput'
        onChange={() => {setCharAllow((prev) => !prev)}}
        />
        <label>Include Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked={numAllow}
        id='numberInput'
        onChange={() => {setNumberAllow((prev) => !prev)}}
        />
        <label>Include Symbols</label>
      </div>
      </div>
    </div>


  </>
  )
}

export default App
