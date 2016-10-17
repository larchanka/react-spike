/* global document */

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import './styles/index.css';

const ESC_KEY = 27;

class SlideMenuButton extends Component {

  componentDidMount() {
    const keyPressHandler = this.keyPressHandler.bind(this);
    document.body.addEventListener('keypress', keyPressHandler);
  }

  shouldComponentUpdate(props) {
    return props.visible !== this.props.visible;
  }

  componentWillUnmount() {
    const keyPressHandler = this.keyPressHandler.bind(this);
    document.body.removeEventListener('keypress', keyPressHandler);
  }

  keyPressHandler(ev) {
    const buttonKey = ev.which || ev.keyCode;

    if (buttonKey === ESC_KEY && this.props.visible) {
      ev.preventDefault();

      this.toggleMenu();
    }
  }

  toggleMenu() {
    const { onClick, visible } = this.props;
    if (typeof onClick === 'function') {
      onClick(!visible);
    }
  }

  render() {
    return (
      <button
        className={classnames('SlideMenuButton', {
          'SlideMenuButton-Visible': this.props.visible
        })}
        onClick={() => this.toggleMenu()}
      >
        <div className="SlideMenuButton-Icon">
          <div className="SlideMenuButton-Icon-Stripe" />
          <div className="SlideMenuButton-Icon-Stripe" />
          <div className="SlideMenuButton-Icon-Stripe" />
        </div>
        <div className="SlideMenuButton-Text">menu</div>
      </button>
    );
  }
}

SlideMenuButton.propTypes = {
  onClick: PropTypes.func,
  visible: PropTypes.bool
};

export default SlideMenuButton;
