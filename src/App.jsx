import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './hero.jsx'
import About from './components/about.jsx'
import PhotoGrid from './components/photogrid.jsx'
import cam from './assets/images/sound control.jpg'
import camera from './assets/images/camera.jpg'
import light from './assets/images/light.jpg'
import production from './assets/images/production.jpg'
import stage from './assets/images/stage.jpg'
import sound from './assets/images/sound.jpg'
import Solutions from './components/solutions.jsx'  
import Choose from './components/choose.jsx'


const images = [cam, camera, light, production, stage, sound];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 ">
      <Navbar />
      <Hero />
      <About />
       <PhotoGrid images={images} />
      <Solutions />
      <Choose />

      <main className="p-8">
        
      </main>
    </div>
  );
}

export default App

