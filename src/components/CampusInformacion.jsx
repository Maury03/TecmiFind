import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

const CampusInformacion = ({ campusSeleccionado, setCampusSeleccionado }) => {
    const [verCarreras, setVerCarreras] = useState(false);

    if (!campusSeleccionado) return null;

    const toggleCarreras = () => {
        setVerCarreras(!verCarreras);
    };

    const abrirPaginaOficial = () => {
        if (campusSeleccionado && campusSeleccionado.enlace) {
            window.open(campusSeleccionado.enlace, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div className="informacion-campus ">
            <button
                className="informacion-campus-cerrar"
                onClick={() => setCampusSeleccionado(null)}
            >
                X
            </button>
            <h2>{campusSeleccionado.nombre}</h2>
            <p>{campusSeleccionado.descripcion}</p>
     
            <div className="botones-acciones">
                <button onClick={toggleCarreras}>
                    {verCarreras ? 'Ocultar Carreras' : 'Ver Carreras'}
                </button>
                <button onClick={abrirPaginaOficial}>Página Oficial</button>
            </div>

            {!verCarreras && campusSeleccionado.imagen && (
                <div className="imagen-campus">
                    <img
                        src={campusSeleccionado.imagen}
                        alt={`Imagen de ${campusSeleccionado.nombre}`}
                    />
                </div>
            )}

            {verCarreras && campusSeleccionado.oferta_educativa && (
                <div className="carreras-container">
                    <ul>
                        {campusSeleccionado.oferta_educativa.map((carrera, idx) => (
                            <li key={idx}>{carrera}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CampusInformacion;