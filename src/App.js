import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import Network from "./Network.json";
import Network2 from "./Network2.json";
import Network3 from "./Network3.json";
import "mapbox-gl/dist/mapbox-gl.css";
import Map from "./Map";

mapboxgl.accessToken =
  "pk.eyJ1IjoibGNkZXNpZ25zIiwiYSI6ImNrbGdxcXQ1NDI3NmMydnRreTZwM3k0YnoifQ.gzPL-l7g-Dw2nOg4gdVb9w";

const App = () => {

  const mapContainer = useRef();

  useEffect(() => {

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/outdoors-v11",
      center: [-121.75, 20.581],
      zoom: 3,
      pitch: 60,
      bearing: 40
    });

    map.on("load", () => {
      map.addSource("site1", {
        type: "geojson",
        data: Network
      });
      map.addSource("site2", {
        type: "geojson",
        data: Network2
      });
      map.addSource("site3", {
        type: "geojson",
        data: Network3
      });

      map.addLayer({
        id: "site1-circle",
        type: "circle",
        source: "site1",
        paint: {
          "circle-color": "#87ceeb",
          "circle-radius": 0,
          "circle-stroke-color": "#00bfff",
          "circle-stroke-width": 10
        }
      });
      map.addLayer({
        id: "site2-circle",
        type: "circle",
        source: "site2",
        paint: {
          "circle-color": "#b0c4de",
          "circle-radius": 0,
          "circle-stroke-color": "#00008b",
          "circle-stroke-width": 10
        }
      });
      map.addLayer({
        id: "site3-circle",
        type: "circle",
        source: "site3",
        paint: {
          "circle-color": "#7DC4E1",
          "circle-radius": 0,
          "circle-stroke-color": "#87CEEB",
          "circle-stroke-width": 10
        }
      });

    });

    Network.features.map((i) => {
      return (
        map.on("click", "site1-circle", () => {
          new mapboxgl.Popup()
            .setHTML(`Region:-<b>${i.properties.region}</b> and data:- <b>${i.properties.data}</b>`)
            .setLngLat(i.geometry.coordinates)
            .addTo(map);
        })
      )
    })

    Network2.features.map((i) => {
      return (
        map.on("click", "site2-circle", () => {
          new mapboxgl.Popup()
            .setHTML(`Region:-<b>${i.properties.region}</b> and data:- <b>${i.properties.data}</b>`)
            .setLngLat(i.geometry.coordinates)
            .addTo(map);
        })
      )
    })

    Network3.features.map((i) => {
      return (
        map.on("click", "site2-circle", () => {
          new mapboxgl.Popup()
            .setHTML(`Region:-<b>${i.properties.region}</b> and data:- <b>${i.properties.data}</b>`)
            .setLngLat(i.geometry.coordinates)
            .addTo(map);
        })
      )
    })

    return () => map.remove();
  }, []);

  return (
    <>
      <div ref={mapContainer} style={{ width: "100%", height: "600px" }} />
      <Map />
    </>
  )
};

export default App;
