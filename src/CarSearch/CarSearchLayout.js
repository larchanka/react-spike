import React, { PropTypes, Component } from 'react';
import Spinner from 'react-spinner';
import { connect } from '../util/react-redux-custom-store-key';
import './styles/CarSearchLayout.css';
import '../../node_modules/react-spinner/react-spinner.css';
import CarSearchPlaceInput from './CarSearchPlaceInput';
import CarSearchMap from './CarSearchMap';
import CarList from './CarList';

const mapStateToProps = ({ serverData }) => ({ isFetching: serverData.isFetching });

class CarSearchLayout extends Component {

  renderLoading() {
    if (!this.props.isFetching) return null;

    return <div className="loading"><Spinner /></div>;
  }

  render() {
    return (
      <div className="CarSearchLayout">
        <CarSearchPlaceInput
          options={{
            types: ['geocode'],
            componentRestrictions: { country: 'nl' }
          }}
        />
        <CarSearchMap />
        <CarList />
        {this.renderLoading()}
      </div>
    );
  }
}

CarSearchLayout.propTypes = {
  isFetching: PropTypes.bool.isRequired
};

CarSearchLayout.contextTypes = {
  carSearchStore: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(CarSearchLayout, 'carSearchStore');
