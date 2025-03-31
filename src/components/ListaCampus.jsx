import React from 'react';
import dataFile from '../assets/campus_data.json';

function ListaCampus({ busqueda, setCampusSeleccionado }) {
    const normalizeString = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    };

    try {
        let filteredData = dataFile;

        if (busqueda !== "") {
            const normalizedBusqueda = normalizeString(busqueda);
            filteredData = dataFile.filter((campus) =>
                normalizeString(campus.nombre).includes(normalizedBusqueda) ||
                normalizeString(campus.estado).includes(normalizedBusqueda) ||
                normalizeString(campus.oferta_educativa.toString()).includes(normalizedBusqueda)
            );
        }

        return filteredData.map((campus) => (
            <li key={campus.nombre}>
                <button onClick={() => setCampusSeleccionado(campus)}>
                    <h3>{campus.nombre}</h3>
                    <p>{campus.ubicacion}</p>
                </button>
            </li>
        ));
    } catch (error) {
        console.error(error);
        return null;
    }
}


export default ListaCampus;