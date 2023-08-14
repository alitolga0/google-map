import React, { useState, useEffect } from "react";
import icon1 from "./icon/1.png";
import icon2 from "./icon/2.png";
import { FaMapMarkerAlt } from 'react-icons/fa';

const GoogleMap = () => {
  const [zoom, setZoom] = useState(10);
  const [map, setMap] = useState(null);
  const [mapIsInitialized, setMapIsInitialized] = useState(false);
  const [adres, setAdres] = useState({ lat: 41.28667, lng: 36.33 });
  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);

  useEffect(() => {
    if (mapIsInitialized) return;
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY
  }&callback=initMap`;
    script.async = true;
    script.onload = initMap;
    setMapIsInitialized(true);
    document.body.appendChild(script);
  }, [mapIsInitialized]);

  const initMap = () => {
    if (window.google) {
      const newMap = new window.google.maps.Map(document.getElementById("map"), {
        center: adres,
        zoom: zoom,
      });

      newMap.addListener("click", handleMapClick);

      setMap(newMap);

      const marker1 = new window.google.maps.Marker({
        position: { lat: 41.3617905, lng: 36.1800858 },
        map: newMap,
        title: "Farktor Teknopark Ofis",
        icon: <FaMapMarkerAlt/>,
      });

      const marker2 = new window.google.maps.Marker({
        position: { lat: 41.2886751, lng: 36.3307018 },
        map: newMap,
        title: "Farktor Merkez Ofis",
        icon: <FaMapMarkerAlt/>,
      });

      setMarkers([marker1, marker2]);
    }
  };

  const handleMapClick = (event) => {
    const clickedLocation = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };

    const marker = new window.google.maps.Marker({
      position: clickedLocation,
      map: map,
      title: "Seçilen Yer",
    });

    if (selectedMarker) {
      selectedMarker.setMap(null);
    }

    setSelectedMarker(marker);

    map.setCenter(clickedLocation);
    map.setZoom(15);
  };

  const changeAdress = () => {
    const newAdres = { lat: 41.3617905, lng: 36.1800858 };
    setAdres(newAdres);

    if (map) {
      map.setCenter(newAdres);
      map.setZoom(15);
    }
  };

  const changeAdress1 = () => {
    const newAdres = { lat: 41.2886751, lng: 36.3307018 };
    setAdres(newAdres);

    if (map) {
      map.setCenter(newAdres);
      map.setZoom(20);
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <div>
        <h1>Şirketimiz</h1>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr" }}>
        <div>
          <div style={{ borderLeft: "1px solid rgba(0,0,0,0.1)", marginBottom: "40px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr" }}>
              <div>
                <img src={icon1} alt="icon1" />
              </div>
              <div>
                <h2 style={{ color: "#092D9B" }}>Farktor Teknopark Ofis</h2>
                <p style={{ color: "#181A46", opacity: "0.6" }}>Aksu Mah. Omu Cad. no:77 Atakum/Samsun</p>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr" }}>
              <div>
                <img src={icon2} alt="icon2" />
              </div>
              <div>
                <p>Çağrı merkezi: 0850 259 3333</p>
                <p style={{ color: "#181A46" }}>(9.30 - 18.30 arasında ulaşabilirsiniz)</p>
              </div>
            </div>
            <div style={{ margin: "0 80px" }}>
              <button
                style={{
                  background: "transparent",
                  borderRadius: "20px",
                  height: "40px",
                  width: "150px",
                  color: "#092D9B",
                  border: "1px solid blue",
                }}
                onClick={changeAdress}
              >
                Haritada Göster
              </button>
            </div>
          </div>
          <div style={{ borderLeft: "1px solid rgba(0,0,0,0.1)", marginBottom: "40px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr" }}>
              <div>
                <img src={icon1} alt="icon1" />
              </div>
              <div>
                <h2 style={{ color: "#092D9B" }}>Farktor Merkez Ofis</h2>
                <p style={{ color: "#181A46" }}>Ulugazi mah. 19 mayıs blv. no:33 kat:1 D:2 İlkadım/Samsun</p>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr" }}>
              <div>
                <img src={icon2} alt="icon2" />
              </div>
              <div>
                <p style={{ color: "#181A46" }}>Çağrı merkezi: 0850 259 3333</p>
                <p style={{ color: "#181A46" }}>(9.30 - 18.30 arasında ulaşabilirsiniz)</p>
              </div>
            </div>
            <div style={{ margin: "0 80px" }}>
              <button
                style={{
                  background: "transparent",
                  borderRadius: "20px",
                  height: "40px",
                  width: "150px",
                  color: "#092D9B",
                  border: "1px solid blue",
                }}
                onClick={changeAdress1}
              >
                Haritada Göster
              </button>
            </div>
          </div>
        </div>
        <div id="map" style={{ width: "886px", height: "400px" }}></div>
      </div>
    </div>
  );
};

export default GoogleMap;
