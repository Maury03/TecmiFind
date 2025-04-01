import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import dataFile from '../assets/campus_data.json';

function Marcadores({ setCampusSeleccionado }) {
    try {
        return dataFile.map((campus) => (
            <Marker
                key={campus.nombre}
                position={[campus.coordenadas.latitud, campus.coordenadas.longitud]}
                eventHandlers={{
                    click: () => setCampusSeleccionado(campus), 
                }}
            >
                <Popup>
                    <h3>{campus.nombre}</h3>
                    <p>{campus.ubicacion}</p>
                </Popup>
            </Marker>
        ));
    } catch (error) {
        console.error(error);
        return null;
    }
};

export default Marcadores;