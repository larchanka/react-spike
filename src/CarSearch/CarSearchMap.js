import React, { Component } from 'react';
import './styles/CarSearchMap.css';

// Map docs: https://developers.google.com/maps/documentation/javascript/tutorial

class CarSearchMap extends Component {
  componentDidMount() {
    const map = new window.google.maps.Map(this._mapDiv, this.props.options);
    console.log(map);
    //TODO
  }

  render() {
    return (
      <div className="CarSearchMap">
        <div className="mapDiv" ref={(c) => this._mapDiv = c}/>
      </div>
    );
  }
}

export default CarSearchMap;
