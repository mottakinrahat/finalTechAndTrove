import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text, lat, lng }: any) => (
  <div>
    <div>{text}</div>
    <div>Latitude: {lat}</div>
    <div>Longitude: {lng}</div>
  </div>
);

const Map = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div style={{ height: "422px", width: "100%", marginTop: "40px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={23.76576} lng={90.42682} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
