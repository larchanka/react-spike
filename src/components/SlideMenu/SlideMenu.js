import React, { PropTypes, Component } from 'react';

import './styles/index.css';

class PreFooterLinks extends Component {

  renderIcon() {
    return null;
  }

  render() {
    return (
      <div>
        {this.renderIcon()}
      </div>
    );
  }
}

PreFooterLinks.propTypes = {
  data: PropTypes.array
};

export default PreFooterLinks;
