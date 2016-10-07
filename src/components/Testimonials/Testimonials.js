import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './styles/index.css';

class Testimonials extends Component {
  constructor(props) {
    super(props);

    this.slideInterval = null;

    this.state = {
      active: 0,
      slideIntervalTime: props.slideIntervalTime || 10000 // in ms
    };
  }

  componentDidMount() {
    this.setInterval();
  }

  componentWillUnmount() {
    this.clearInterval();
  }

  setInterval() {
    this.slideInterval = setInterval(() => {
      this.changeSlide();
    }, this.state.slideIntervalTime);
  }

  changeSlide() {
    const { active } = this.state;
    const testimonialsAmount = this.props.data.length;
    let nextActive = active + 1;

    if (nextActive === testimonialsAmount) {
      nextActive = 0;
    }

    this.setState({
      active: nextActive
    });
  }

  clearInterval() {
    clearInterval(this.slideInterval);
    this.slideInterval = null;
  }

  renderTestimonial() {
    const testimonials = this.props.data;

    return testimonials.map(({ imageUrl, text, name }, index) =>
      <li
        key={`testimonial-${index}`}
        className={classnames('Testimonial', {
          'Testimonial-Active': index === this.state.active
        })}
      >
        <div className="Testimonial-Image">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="Testimonial-Content">
          <blockquote className="Testimonial-Text">{text}</blockquote>
          <div className="Testimonial-Name">{name}</div>
        </div>
      </li>
    );
  }

  render() {
    if (!(this.props.data || []).length) {
      return null;
    }

    return (
      <ul className="Testimonials">
        {this.renderTestimonial()}
      </ul>
    );
  }
}

Testimonials.propTypes = {
  data: PropTypes.array,
  slideIntervalTime: PropTypes.number
};

export default Testimonials;
