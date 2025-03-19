import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Mapa() {
  const posicion = [22.38189619365901, -97.90155458940743]; // Latitud y longitud (Prueba)

  return (
    <MapContainer center={posicion} zoom={13} style={{ height: window.innerHeight, width: window.innerWidth }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={posicion}>
        <Popup>
          Prueba Campus Tampico
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Mapa;