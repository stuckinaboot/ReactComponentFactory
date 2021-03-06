import * as React from "react";
import ContainerDimensions from "react-container-dimensions";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  MapConsumer,
} from "react-leaflet";
import * as L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

// Parts of map code sourced from
// https://react-leaflet.js.org/docs/example-popup-marker

export type Coord = {
  long: number;
  lat: number;
};

export type MarkerItem = {
  popupContent?: React.ReactNode;
} & Coord;

export type MarkerIcon = {
  iconUrl: string;
  iconSize: L.PointTuple;
  iconAnchor: L.PointTuple;
  popupAnchor?: L.PointTuple;
  shadowUrl?: string;
};

const DEFAULT_ZOOM = 13;

export default function SimpleMap(props: {
  center: Coord;
  zoom?: number;
  markerItems?: MarkerItem[];
  animateUpdateToView?: boolean;
  markerIcon?: MarkerIcon;
}) {
  const zoom = props.zoom || DEFAULT_ZOOM;

  React.useEffect(() => {
    // Need to set default marker icon manually otherwise
    // the marker icon won't load
    // https://github.com/PaulLeCam/react-leaflet/issues/453
    const defaultIcon = L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow,
      // Setting iconSize and iconAnchor is necessary to prevent
      // the marker from moving on zoom in/out
      // https://stackoverflow.com/questions/49441600/react-leaflet-marker-files-not-found
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      // Display pop-up above marker
      // https://gis.stackexchange.com/questions/194004/changing-popup-position-on-leaflet-marker
      popupAnchor: [0, -30],
      // Spread props.markerIcon below the other properties
      // as that will overwrite the existing values
      ...(props.markerIcon || {}),
    });

    L.Marker.prototype.options.icon = defaultIcon;
  }, []);

  // Map props are immutable so need to use MapConsumer
  // https://react-leaflet.js.org/docs/api-map/
  return (
    <ContainerDimensions>
      {({ height, width }) => (
        <MapContainer
          center={[props.center.lat, props.center.long]}
          zoom={zoom}
          scrollWheelZoom={true}
          style={{ height, width }}
        >
          <MapConsumer>
            {(map) => {
              map.setView([props.center.lat, props.center.long], zoom, {
                animate: props.animateUpdateToView || false,
              });
              return (
                <>
                  <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  {props.markerItems != null &&
                    props.markerItems.map((item, idx) => (
                      <Marker
                        key={"marker-" + idx}
                        position={[item.lat, item.long]}
                      >
                        {item.popupContent != null && (
                          <Popup>{item.popupContent}</Popup>
                        )}
                      </Marker>
                    ))}
                </>
              );
            }}
          </MapConsumer>
        </MapContainer>
      )}
    </ContainerDimensions>
  );
}
