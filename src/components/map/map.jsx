import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({offers}) => {
  const mapRef = useRef();

  useEffect(() => {
    const city = [52.38333, 4.9];
    const zoom = 12;

    const icon = leaflet.icon({
      iconUrl: `./img/pin.svg`,
      iconSize: [30, 30]
    });

    mapRef.current = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    mapRef.current.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      }).addTo(mapRef.current);


    offers.map((offer) => {
      leaflet
          .marker({
            lat: offer.city.location.lat,
            lng: offer.city.location.lng
          }, {icon})
          .addTo(mapRef.current);
    });

    return () => {
      mapRef.current.remove();
    };
  });


  return (
    <div id="map" ref={mapRef}></div>
  );
};

Map.propTypes = {
  offers: PropTypes.array.isRequired,
};


export default Map;
