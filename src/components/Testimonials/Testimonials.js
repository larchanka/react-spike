import React, { PropTypes, Component } from 'react';

import './styles/index.css';

class Testimonials extends Component {
  componentDidMount() {

  }

  renderTestimonial() {
    const testimonials = this.options.data;

    return testimonials.map(testimonial => {
      const { imageUrl, text, name } = testimonial;

      return (
        <div className='Testimonial'>
          <div className='Testimonial-Image'>
            <img src={imageUrl} alt={name} />
          </div>
          <div className='Testimonial-Content'>
            <div className='Testimonial-Text'>{text}</div>
            <div className='Testimonial-Name'>{name}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    if (!(this.options.data || []).length) {
      return null;
    }

    return (
      <div className='Testimonials'>
        {::this.renderTestimonial()}
      </div>
    );
  }
}

Testimonials.propTypes = {
  data: PropTypes.array
};

export default Testimonials;
