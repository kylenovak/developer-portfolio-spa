import React, { Component } from 'react';
import Map from '../footer/Map';
import './styles/contact.css';

class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <header className="flexbox-item flex-row container">
          <h2><span><i className="fas fa-hashtag"></i> Contact Me</span></h2>
        </header>
        <Map />
      </section>
    );
  }
}

export default Contact;
