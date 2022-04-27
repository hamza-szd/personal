import React from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Intro from './components/Intro/Intro'

function App() {
  React.useEffect(() => {
      const event = new Event('rendered')
      document.dispatchEvent(event)
  }, [])

  return (
    <code>
      <div className="section_background-wrap">
        <canvas id="gradient-canvas" data-js-darken-top data-transition-in></canvas>
      </div>
      <div className='container'>
        <Intro />
        <Footer />
      </div>
    </code>
  )
}

export default App
