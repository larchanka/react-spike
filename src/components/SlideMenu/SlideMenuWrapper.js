import React, { PropTypes, Component } from 'react';
import SlideMenu from './SlideMenu';
import SlideMenuButton from './SlideMenuButton';

import './styles/index.css';

class SlideMenuWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };
  }

  onClickSlideMenuButtonHandler(visible) {
    this.setState({
      visible
    });
  }

  render() {
    return (
      <div className="SlideMenuWrapper">
        <SlideMenu
          onClickShadow={() => this.onClickSlideMenuButtonHandler(false)}
          position={this.props.menuPosition}
          visible={this.state.visible}
        />
        <SlideMenuButton
          onClick={visible => this.onClickSlideMenuButtonHandler(visible)}
          visible={this.state.visible}
        />
      </div>
    );
  }
}

SlideMenuWrapper.propTypes = {
  menuPosition: PropTypes.oneOf([
    'left',
    'right'
  ])
};

export default SlideMenuWrapper;
