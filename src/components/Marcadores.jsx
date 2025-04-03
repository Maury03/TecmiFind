import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet'
import dataFile from '../assets/campus_data.json';

function Marcadores({ setCampusSeleccionado }) {
    const defaultIcon = new L.Icon({
        iconUrl: './markers/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12,41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowUrl: './markers/marker-shadow.png',
        shadowSize: [41, 41],
        shadowAnchor: [12, 41]
    })
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