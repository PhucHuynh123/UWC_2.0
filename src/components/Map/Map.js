import React from "react";
import GoogleMapReact from 'google-map-react';

const Map = ({ latitude, longitude }) => {
  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: { lat: latitude, lng: longitude },
      map,
      title: "Hello World!",
    });
    return marker;
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBQzPJC2jemC_NtfuJH3xqGmJKMQuNguF0" }}
        defaultCenter={{ lat: latitude, lng: longitude }}
        defaultZoom={16}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
