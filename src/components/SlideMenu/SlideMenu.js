import React, { PropTypes } from 'react';
import classnames from 'classnames';

import './styles/index.css';

const onClickShadowHandler = (ev, cb) => {
  const { target } = ev;

  if (target.classList.contains('SlideMenu-Shadow')) {
    cb();
  }
};

const SlideMenu = props => (
  <button
    className={
      classnames(
        'SlideMenu-Shadow',
        {
          'SlideMenu-Shadow-Visible': props.visible
        }
      )
    }
    onClick={
      ev => onClickShadowHandler(ev, props.onClickShadow)
    }
  >
    <div
      className={
        classnames(
          'SlideMenu',
          `SlideMenu-${props.position}`,
          {
            'SlideMenu-Visible': props.visible
          }
        )
      }
    />
  </button>
);

SlideMenu.propTypes = {
  position: PropTypes.oneOf([
    'left',
    'right'
  ]),
  visible: PropTypes.bool,
  onClickShadow: PropTypes.func
};

export default SlideMenu;
