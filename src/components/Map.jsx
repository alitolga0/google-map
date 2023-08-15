import React, { useState, useEffect } from "react";
import icon1 from "../icon/1.png";
import icon2 from "../icon/2.png";
import { FaMapMarkerAlt } from "react-icons/fa";

const GoogleMap = () => {
  const [zoom, setZoom] = useState(10);
  const [map, setMap] = useState(null);
  const [mapIsInitialized, setMapIsInitialized] = useState(false);
  const [adres, setAdres] = useState({ lat: 41.28667, lng: 36.33 });
  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [infoWindow, setInfoWindow] = useState(null);

  useEffect(() => {
    if (mapIsInitialized) return;
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&callback=initMap`;
    script.async = true;
    script.onload = window.initMap;
    setMapIsInitialized(true);
    document.body.appendChild(script);
  }, [mapIsInitialized]);

  window.initMap = () => {
    if (window.google) {
      const newMap = new window.google.maps.Map(
        document.getElementById("map"),
        {
          center: adres,
          zoom: zoom,
        }
      );

      newMap.addListener("click", handleMapClick);

      setMap(newMap);

      const marker1 = new window.google.maps.Marker({
        position: { lat: 41.3617905, lng: 36.1800858 },
        map: newMap,
        title: "Farktor Teknopark Ofis",
        icon: <FaMapMarkerAlt />,
        description: "Aksu Mah. Omu Cad. no:77 Atakum/Samsun",
        image:
          "https://lh5.googleusercontent.com/p/AF1QipO4PNh-7LZDlqUU6vpreCF6xSCmRc92khZEK0Y=w426-h240-k-no",
      });

      const marker2 = new window.google.maps.Marker({
        position: { lat: 41.2886751, lng: 36.3307018 },
        map: newMap,
        title: "Farktor Merkez Ofis",
        icon: <FaMapMarkerAlt />,
        description:
          "Ulugazi mah. 19 mayıs blv. no:33 kat:1 D:2 İlkadım/Samsun",
        image:
          "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=qsQkFnxSi00SSNU5WhCekw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=161.14879&pitch=0&thumbfov=100",
      });

      setMarkers([marker1, marker2]);
    }
  };

  const handleMarkerClick = (marker) => {
    if (infoWindow) {
      infoWindow.close();
    }

    const newInfoWindow = new window.google.maps.InfoWindow({
      content: `
        <div>
          <img style="width:100%; height:100px; margin: 0 auto;" src=${marker.image} /><br>
          <strong>${marker.title}</strong><br>${marker.description}
        </div>
      `,
    });

    newInfoWindow.open(map, marker);
    setInfoWindow(newInfoWindow);
  };

  const handleMapClick = (event) => {
    if (infoWindow) {
      infoWindow.close();
    }

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

    if (map) {
      map.setCenter(clickedLocation);
      map.setZoom(15);
    }
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
    <div className="p-20">
      <div>
        <h1 className="text-2xl mb-10">Şirketimiz</h1>
      </div>
      <div className="grid grid-cols-3">
        <div className="mr-20">
          <div className="border-l-[1px] mb-20">
            <div className="grid grid-cols-[auto_1fr]">
              <div>
                <img src={icon1} alt="icon1" />
              </div>
              <div>
                <h2 className="text-[#092D9B]">Farktor Teknopark Ofis</h2>
                <p className="text-[#181A46] opacity-[0.6]">
                  Aksu Mah. Omu Cad. no:77 Atakum/Samsun
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[auto_1fr]">
              <div>
                <img src={icon2} alt="icon2" />
              </div>
              <div>
                <p>Çağrı merkezi: 0850 259 3333</p>
                <p className="text-[#181A46]">
                  (9.30 - 18.30 arasında ulaşabilirsiniz)
                </p>
              </div>
            </div>
            <div className="m-[0_40px]" onClick={changeAdress}>
              <button
                className="bg-transparent	rounded-2xl h-10 w-40 text-[#092D9B] border-[1px] border-[#092D9B]"
                onClick={() => handleMarkerClick(markers[0])}
              >
                Haritada Göster
              </button>
            </div>
          </div>
          <div
            style={{
              borderLeft: "1px solid rgba(0,0,0,0.1)",
              marginBottom: "40px",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr" }}>
              <div>
                <img src={icon1} alt="icon1" />
              </div>
              <div>
                <h2 style={{ color: "#092D9B" }}>Farktor Merkez Ofis</h2>
                <p style={{ color: "#181A46", opacity: "0.6" }}>
                  Ulugazi mah. 19 mayıs blv. no:33 kat:1 D:2 İlkadım/Samsun
                </p>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr" }}>
              <div>
                <img src={icon2} alt="icon2" />
              </div>
              <div>
                <p style={{ color: "#181A46" }}>Çağrı merkezi: 0850 259 3333</p>
                <p style={{ color: "#181A46" }}>
                  (9.30 - 18.30 arasında ulaşabilirsiniz)
                </p>
              </div>
            </div>
            <div style={{ margin: "0 80px" }} onClick={changeAdress1}>
              <button
                style={{
                  background: "transparent",
                  borderRadius: "20px",
                  height: "40px",
                  width: "150px",
                  color: "#092D9B",
                  border: "1px solid blue",
                }}
                onClick={() => handleMarkerClick(markers[1])}
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
