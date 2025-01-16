import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

function Map() {
  const [viewPort, setViewPort] = useState({
    latitude: 43.6534817,
    longitude: -79.3839347,
    zoom: 10,
    width: "100vw",
    heigh: "100vh",
  });

  return (
    <div>
      <ReactMapGL
        {...viewPort}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      ></ReactMapGL>
    </div>
  );
}

export default Map;
