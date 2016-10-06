/* global window */

import React, { PropTypes, Component } from 'react';
import { changePlace } from './actions';

// Autocomplete docs: https://developers.google.com/maps/documentation/javascript/places-autocomplete

class CarSearchPlaceInput extends Component {
  componentDidMount() {
    const autocomplete = new window.google.maps.places.Autocomplete(
      this.inputRef, this.props.options
    );
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      this.context.carSearchStore.dispatch(changePlace(place));
    });
  }

  render() {
    return (
      <div className="CarSearchPlaceInput">
        <input type="text" ref={c => this.inputRef = c} />
      </div>
    );
  }
}

CarSearchPlaceInput.propTypes = {
  options: PropTypes.object
};

CarSearchPlaceInput.contextTypes = {
  carSearchStore: PropTypes.object.isRequired
};

export default CarSearchPlaceInput;
