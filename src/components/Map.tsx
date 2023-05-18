import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { LatLngExpression, Icon } from "leaflet";
import markerIcon from "../assets/icons-48.svg";
import { nanoid } from "@reduxjs/toolkit";

const skater = new Icon({
    iconUrl: markerIcon,
    iconSize: [25, 25]
});

const position = [20, 40];

/**
 * @param param0 CONTAINS COUNTRYWIDE DATA ABOUT COVID-19
 * @returns REACT ELEMENT WHICH DISPLAYS LEAFLET MAP USING THE DATA FROM API
 */
const Map = ({ mapData }: any) => {

    return (
        <div className="map-container">
            <MapContainer className="canvas" center={position as LatLngExpression} zoom={4} scrollWheelZoom={false} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {mapData.data?.map((country: any) => (
                    <Marker icon={skater} key={nanoid()}
                        position={[country.countryInfo.lat, country.countryInfo.long] as LatLngExpression}
                    >
                        <Popup>
                            <div>
                                <h3>{country.country}</h3>
                                <p style={{ margin: "2px 0 0 0" }}> active : <span style={{ color: "#FFA500" }}>{country.active} </span></p>
                                <p style={{ margin: "2px 0 0 0" }}> recovered : <span style={{ color: "#00c784" }}>{country.recovered} </span></p>
                                <p style={{ margin: "2px 0 0 0" }}> death : <span style={{ color: "red" }}>{country.deaths} </span></p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}

export default Map;