import React from 'react'
import './App.css'
import Particles from 'react-particles-js'
import Form from './components/Form'

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },
    size: {
      value: 3,
      random: true
    },
    opacity: {
      value: 0.2,
      random: false
    },
    line_linked: {
      opacity: 0.3
    }
  },
  interactivity: {
    detect_on: `window`,
    events: {
      onhover: {
        enable: true,
        mode: `repulse`
      }
    },
    resize: true
  }
}

const App = () => {
  return (
    <div className="App">
      <Particles className="particles" params={particlesOptions} />
      <Form />
    </div>
  )
}

export default App