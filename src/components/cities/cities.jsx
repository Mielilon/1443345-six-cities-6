import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Places from '../places/places';
import PlacesEmpty from '../places-empty/places-empty';
import Map from '../map/map';

const Cities = ({offers, location, isEmpty}) => {
  const [activeOfferId, setActiveOfferId] = useState(null);

  return (
    <div className="cities">
      <div className={`cities__places-container container${isEmpty && ` cities__places-container--empty` || ``}`}>
        {isEmpty
          && <PlacesEmpty location={location}/>
          || <Places offers={offers} location={location} setActiveOfferId={setActiveOfferId} />}
        <div className="cities__right-section">
          {!isEmpty
            && <Map offers={offers} activeLocation={location} activeOfferId={activeOfferId} type="main" />
            || ``}
        </div>
      </div>
    </div>
  );
};

Cities.propTypes = {
  location: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
  isEmpty: PropTypes.bool.isRequired
};

export default Cities;
