import React, { Component } from 'react';

// Autocomplete docs: https://developers.google.com/maps/documentation/javascript/places-autocomplete

class CarSearchPlaceInput extends Component {
  componentDidMount() {
    const autocomplete = new window.google.maps.places.Autocomplete(this._input, this.props.options);
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      console.log(place);
      //TODO
    });
  }

  render() {
    return (
      <div className="CarSearchPlaceInput">
        <input type="text" ref={(c) => this._input = c}/>
      </div>
    );
  }
}

export default CarSearchPlaceInput;
