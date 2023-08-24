import { useState } from 'react'
import Navegador from './componentes/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Titulo from './componentes/titulo/titulo';
import Footer from './componentes/footer/footer';

function App() {
  const [count, setCount] =  useState(0)
  const addCount = () => {
      setCount(count + 1) 
  }
  
  return (
    <>
    <div>
    <Navegador/>

    <Titulo titulo='Titulo de mi primer proyecto' subtitulo = 'subtitulo de mi primer proyecto'/>
    
    <label>
                <strong>{ count }</strong>
    </label>

            <button onClick={addCount}> + 1 </button>
    
    <Footer subFooter='subtitulo de footer'/>

    </div>
    </>
  )
}

export default App
