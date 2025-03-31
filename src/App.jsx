import React, { useState } from 'react';
import Mapa from './components/Mapa'
import './App.css'
import PantallaBusqueda from './components/PantallaBusqueda'
import CampusInformacion from './components/CampusInformacion';

function App() {
    const [campusSeleccionado, setCampusSeleccionado] = useState(null);

    return (
        <>
            <PantallaBusqueda setCampusSeleccionado={setCampusSeleccionado} />
            <Mapa setCampusSeleccionado={setCampusSeleccionado} />
            <CampusInformacion
                campusSeleccionado={campusSeleccionado}
                setCampusSeleccionado={setCampusSeleccionado}
            />
        </>
    );
}

export default App
