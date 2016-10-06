import React, { PropTypes, Component } from 'react';

import './styles/index.css';

class Testimonials extends Component {

  componentDidMount() {

  }

  renderTestimonial() {
    const testimonials = this.props.data;

    return testimonials.map(({ imageUrl, text, name }) =>
      <li className="Testimonial">
        <div className="Testimonial-Image">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="Testimonial-Content">
          <div className="Testimonial-Text">{text}</div>
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
  data: PropTypes.array
};

export default Testimonials;
