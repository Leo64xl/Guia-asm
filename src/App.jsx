import { BrowserRouter,
         Route, 
         Routes } from 'react-router-dom'
import './App.css'
import Welcome from './pages/Welcome'
import Problems from './pages/Problems'
import Registers from './pages/Registers'
import Modes from './pages/Modes'
import Instructions from './pages/Instructions'
import Comments from './pages/Comments'
import About from './pages/About'
import Default from './pages/Default'

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />}/>
            <Route path="/registros-internos" element={<Registers />}/>
            <Route path="/modos-direccionamiento" element={<Modes />}/>
            <Route path="/juego-instrucciones" element={<Instructions />}/>
            <Route path="/etiquetas-comentarios-directivas" element={<Comments />}/>
            <Route path="/problemas" element={<Problems />}/>
            <Route path="/acerca-de" element={<About />}/>
            <Route path="*" element={<Default />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App