import React, { useEffect, useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import dataFile from '../assets/campus_data.json';

function Marcadores() {
    try{
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