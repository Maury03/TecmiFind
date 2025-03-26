import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Marcadores from "./Marcadores";

function Mapa() {

  return (
    <MapContainer center={[22.76229591310042, -102.53576353044313]} zoom={5} zoomControl={false} style={{ height: "100vh", width: "100vw" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marcadores />
    </MapContainer>
  );
}

export default Mapa;