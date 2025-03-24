import React, { useEffect, useState } from 'react';
import { Marker, Popup } from 'react-leaflet';

const Marcadores = () => {
    try{
        var request = new XMLHttpRequest();
        request.open("GET", "../../src/assets/campus_data.json", false);
        request.send(null)
        var dataFile = JSON.parse(request.responseText)
        const markerList = dataFile.map((campus) => 
            <Marker key={campus.nombre} position={[campus.coordenadas.latitud, campus.coordenadas.longitud]}>
                <Popup>
                    <h3>{campus.nombre}</h3>
                    <p>{campus.ubicacion}</p>
                </Popup>
            </Marker>
        );
        return markerList
    } catch (error) {
        console.error(error)
    }
};

export default Marcadores;