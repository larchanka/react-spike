import React, { Component } from 'react';

class CarSearchPlaceInput extends Component {
  componentDidMount() {
    new window.google.maps.places.Autocomplete(this._input, this.props.options);
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
