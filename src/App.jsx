import { useState } from 'react'
import Mapa from './components/Mapa'
import './App.css'
import PantallaBusqueda from './components/PantallaBusqueda'

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "0px" }}>
      <Mapa />
      <PantallaBusqueda />
    </div>
  )
}

export default App
