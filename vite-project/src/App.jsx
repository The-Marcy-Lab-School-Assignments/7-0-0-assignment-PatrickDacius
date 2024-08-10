import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greetings'
import Section from './warmup/section'
import SizeButtons from './components/SizeButtons'


function App() {
  const [font, setFontSize] = useState(10)
  const [currentLanguage, setLanguage] = useState('Good Morning')

  // const fontSizeChange = (size) => {
  //   setFontSize(initialSize => initialSize + size)

  // }
  return (
    <main>
      <SizeButtons font={font} setFontSize={setFontSize} />

      <section>
        <h1 style={{ fontSize: `${font}em` }} >{currentLanguage}</h1>
      </section>

      <section>
        <button onClick={() => setLanguage('Good Morning')}>
          English
        </button>
        <button onClick={() => setLanguage('Hola')}>
          Spanish
        </button>
        <button onClick={() => setLanguage('Bonjou')}>
          Haitian Creole
        </button>
        <button onClick={() => setLanguage("早上好")}>
          Chinese
        </button>
      </section>

    </main>
  )
}

export default App
