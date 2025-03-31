import React, {useState } from 'react';
import ListaCampus from './ListaCampus';
import '../App.css';

const PantallaBusqueda = ({ setCampusSeleccionado }) => {
    const [busqueda, setBusqueda] = useState("");
    let inputHandler = (e) => {
        setBusqueda(e.target.value.toLowerCase());
    }
    return (
        <div class="busqueda">
            <input type="text" placeholder="Buscar por nombre, carrera o estado" onChange={inputHandler} />
            <ul>
                <ListaCampus
                    busqueda={busqueda}
                    setCampusSeleccionado={setCampusSeleccionado} 
                />
            </ul>
        </div>
    );
};

export default PantallaBusqueda;