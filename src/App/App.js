import React from 'react';

import Testimonials from '../components/Testimonials/Testimonials';

import logo from './logo.svg';
import './styles/App.css';

const testimonialsData = [
  {
    imageUrl: 'https://www.greenwheels.com/sites/all/themes/greenwheels/rebranding/img/testimonial_sandra.png',
    text: 'Als binnenstadbewoner doe ik het liefst alles op de fiets. Voor ritjes buiten de stad neem ik, vaak in combinatie met de trein, een Greenwheels auto. Ideaal!',
    name: 'Sandra Jonas, Den Haag'
  },
  {
    imageUrl: 'https://www.greenwheels.com/sites/all/themes/greenwheels/rebranding/img/testimonial_lars.png',
    text: 'Als startup zijn wij altijd op zoek naar toegang tot de hoogste kwaliteit tegen de laagste kosten en met de minste commitment. Daarom is Greenwheels de partij die bij ons past.',
    name: 'Lars van Wieren (oprichter Starred), Amsterdam'
  },
  {
    imageUrl: 'https://www.greenwheels.com/sites/all/themes/greenwheels/rebranding/img/testimonial_jeroen.png',
    text: 'Al twaalf jaar maak ik met veel plezier gebruik van Greenwheels. Het concept is ideaal: om de hoek een auto beschikbaar, je betaalt alleen wanneer je \'m nodig hebt en geen gedoe met onderhoud.',
    name: 'Jeroen Grooten, Amsterdam'
  }
];

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React!</h2>
    </div>
    <Testimonials data={testimonialsData} />
  </div>
);

export default App;
