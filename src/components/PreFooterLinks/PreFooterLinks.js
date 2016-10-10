import React, { PropTypes, Component } from 'react';

import './styles/index.css';
import nextSvg from './next.svg';

const tmpData = [
  {
    url: 'zo-werkt-het',
    title: 'Hoe werkt Greenwheels?',
    subTitle: 'Hoe werkt het'
  },
  {
    url: 'book/search/nl/index',
    title: 'Vind een auto in de buurt',
    subTitle: 'Locaties'
  }
];

class PreFooterLinks extends Component {

  renderLink() {
    const linksData = tmpData;
    return tmpData.map(({url, title, subTitle}, index) => (
      <li key={`prefooterlink-${index}`} className="PreFooterLink">
        <a href={url} title={subTitle} className="PreFooterLink-Link">
          <div className="PreFooterLink-Wrapper">
            <div className="PreFooterLink-ContentWrapper">
              <div className="PreFooterLink-Content">
                <h6 className="PreFooterLink-SubTitle">{subTitle}</h6>
                <span className="PreFooterLink-Title">{title}</span>
              </div>
              <i className="PreFooterLink-Icon">
                <img src={nextSvg} alt={subTitle} className="PreFooterLink-Icon-Image" />
              </i>
            </div>
          </div>
        </a>
      </li>
    ));
  }

  render() {

    return (
      <ul className="PreFooterLinks">
        {this.renderLink()}
      </ul>
    );
  }
}

PreFooterLinks.propTypes = {
  data: PropTypes.array
};

export default PreFooterLinks;
