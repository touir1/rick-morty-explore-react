import { useState, useEffect, useRef } from 'react'
import { Routes, Route } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import './App.css'
import Demo from './components/Demo'
import Navbab from './components/Navbab'

function App() {

  const [title, setTitle] = useState("my title")
  const [count, setCount] = useState(0)

  useEffect(() => {
    return () => {} // cleanup function
  }, [])

  const [inputValue, setInputValue] = useState("")
  const input2ref = useRef(null)

  const handleInputValueChange = (e) => {
    setInputValue(e.target.value)
  }
  const handleFormValidation = () => {
    console.log('inputValue: ', inputValue)
    console.log('inputValue2: ', input2ref.current.value)
  }


  return (
    <>
      <Navbab />
      <h1>i'm app : {title}</h1>
      <input value={inputValue} onChange={handleInputValueChange} placeholder='input controlé' />
      <input placeholder='input non controlé' ref={input2ref} />
      <button onClick={handleFormValidation}>Validate</button>
      <div>input value: {inputValue}</div>
      <Demo info="my info" demo={"hello"} >
        <h3>i'm children</h3>
      </Demo>
      <Demo info="my info 2" />
      <div>
        <button onClick={() => { setTitle("new title") }}>change title</button> &nbsp;
        <button onClick={() => { 
          setCount((count) => {
            let newCount = count + 1
            console.log('test')
            return newCount
          })
          }}>count: {count}</button>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}

export default App
