// src/pages/Flights.jsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Ícono personalizado del marcador
const airportIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [35, 35],
  iconAnchor: [17, 35],
});

export default function Flights() {
  // Coordenadas del Aeropuerto Internacional Mariscal Sucre
  const quitoAirport = [-0.1198, -78.3574];

  return (
    <div className="h-screen w-full">
      <h1 className="text-3xl font-bold text-center my-4">Quito Airport Location</h1>

      {/* Contenedor del mapa */}
      <MapContainer
        center={quitoAirport}
        zoom={13}
        style={{ height: "80vh", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={quitoAirport} icon={airportIcon}>
          <Popup>
            Aeropuerto Internacional Mariscal Sucre <br /> Quito, Ecuador
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
