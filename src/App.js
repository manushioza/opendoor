import Map from "react-map-gl";

function App() {
  return (
    <Map
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      initialViewState={{
        latitude: 43.6534817,
        longitude: -79.3839347,
        zoom: 13,
      }}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/outdoors-v12"
    />
  );
}

export default App;