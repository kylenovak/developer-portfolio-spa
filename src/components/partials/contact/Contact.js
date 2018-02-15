import React, { Component } from 'react';
import ContactForm from './ContactForm';
import Social from './Social';
import SectionHeader from '../sections/SectionHeader';
import SectionRow from '../sections/SectionRow';
import SectionColumn from '../sections/SectionColumn';
import Map from './Map';
import './styles/contact.css';

class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <SectionHeader title="Contact Me" />

        <SectionRow classes="contact-columns">
          <SectionColumn>
            <ContactForm />
          </SectionColumn>

          <SectionColumn>
            <Social />
          </SectionColumn>
        </SectionRow>

        <Map />
      </section>
    );
  }
}

export default Contact;
