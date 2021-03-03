import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';


const CITIES = {
  Amsterdam: [52.3833, 4.9044],
  Paris: [48.8589, 2.3469],
  Cologne: [50.9293, 6.9595],
  Brussels: [50.8552, 4.3453],
  Hamburg: [53.5503, 10.0006],
  Dusseldorf: [51.2287, 6.7743]
};

const INITIAL_SETTINGS = {
  zoom: 12,
  zoomControl: false,
  marker: true
};

const ICON = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});

const ACTIVE_ICON = leaflet.icon({
  iconUrl: `img/pin-active.svg`,
  iconSize: [30, 30]
});

const setMarkers = (map, offers, activeOfferId) => {
  offers.forEach((offer) => {
    leaflet
      .marker({
        lat: offer.city.location.lat,
        lon: offer.city.location.lng
      }, {icon: offer.id === activeOfferId ? ACTIVE_ICON : ICON})
      .addTo(map);
  });
};

const removeMarkers = (map) => {
  map.eachLayer(function (layer) {
    if (layer instanceof leaflet.Marker) {
      layer.remove();
    }
  });
};

const Map = ({activeLocation, offers, activeOfferId}) => {
  const map = useRef();
  const currentCity = CITIES[activeLocation] || activeLocation;


  useEffect(() => {
    map.current = leaflet.map(`map`, {
      center: currentCity,
      ...INITIAL_SETTINGS
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map.current);

    setMarkers(map.current, offers, activeOfferId);

    return () => {
      map.current.remove();
    };
  }, []);

  useEffect(() => {
    map.current.flyTo(new leaflet.LatLng(...currentCity), INITIAL_SETTINGS.zoom);
    removeMarkers(map.current);
    setMarkers(map.current, offers, activeOfferId);
  }, [JSON.stringify(offers)]);

  useEffect(() => {
    removeMarkers(map.current);
    setMarkers(map.current, offers, activeOfferId);
  }, [activeOfferId]);

  return (
    <div id="map" style={{height: `590px`}} ref={map}></div>
  );
};

Map.propTypes = {
  activeLocation: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
  offers: PropTypes.array.isRequired,
  activeOfferId: PropTypes.number,
};

export default React.memo(Map);
