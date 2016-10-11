import React, { PropTypes } from 'react';
import { List } from 'react-virtualized';
import { connect } from '../util/react-redux-custom-store-key';
import { changeSelectedLocation } from './actions';
import './styles/CarList.css';

const mapStateToProps = ({ serverData, mapBounds }) => ({
  data: serverData.data,
  mapBounds
});

const CarList = ({ data, mapBounds }, { carSearchStore }) => {
  if (!data) {
    return <div>Loading...</div>;
  }

  const locations = [];
  for (const city of data.citiesAndLocations) {
    for (const location of city.locations) {
      if (mapBounds.contains({ lat: location.geo[0], lng: location.geo[1] })) {
        locations.push(location);
      }
    }
  }

  // eslint-disable-next-line
  const rowRenderer = ({ key, index, style }) => {
    const location = locations[index];

    return (
      // eslint-disable-next-line
      <div
        className="CarListItemContainer"
        key={key}
        style={style}
        onClick={() => carSearchStore.dispatch(changeSelectedLocation(location))}
      >
        <div className="CarListItem">
          {location.addr}
        </div>
      </div>
    );
  };

  return (
    <div className="CarList">
      <List
        width={320}
        height={400}
        rowCount={locations.length}
        rowHeight={100}
        rowRenderer={rowRenderer}
      />
    </div>
  );
};

CarList.propTypes = {
  data: PropTypes.object,
  mapBounds: PropTypes.object
};

CarList.contextTypes = {
  carSearchStore: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(CarList, 'carSearchStore');
