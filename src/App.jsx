import { Routes, Route } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import './App.css'
import Navbab from './components/Navbab'
import CharacterListPage from './pages/CharacterListPage'
import CharacterDetailPage from './pages/CharacterDetailPage'

function App() {

  return (
    <>
      <Navbab />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/characters' element={<CharacterListPage />} />
        <Route path="/character/:id" element={<CharacterDetailPage />} />
      </Routes>
    </>
  )
}

export default App;