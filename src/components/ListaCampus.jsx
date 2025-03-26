import React, { useEffect, useState } from 'react';
import dataFile from '../assets/campus_data.json';

function ListaCampus({busqueda}){
    const normalizeString = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    }
    try{
        var filteredData = dataFile;
        
        if (busqueda !== ""){
            const normalizedBusqueda = normalizeString(busqueda);
            filteredData = dataFile.filter((campus) => 
                normalizeString(campus.nombre).includes(normalizedBusqueda) || 
                normalizeString(campus.estado).includes(normalizedBusqueda) || 
                normalizeString(campus.oferta_educativa.toString()).includes(normalizedBusqueda)
            );
        }

        const campusList = filteredData.map((campus) => 
            <li>
                <button>
                    <h3>{campus.nombre}</h3>
                    <p>{campus.ubicacion}</p>
                </button>
            </li>
        );
        return campusList
    } catch (error) {
        console.error(error)
    }
};

export default ListaCampus;