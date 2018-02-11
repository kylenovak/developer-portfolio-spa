import React, { Component } from 'react';
import SectionHeader from '../sections/SectionHeader';
import SectionRow from '../sections/SectionRow';
import SectionColumn from '../sections/SectionColumn';
import Link from '../links/Link';
import Map from './Map';
import './styles/contact.css';

class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <SectionHeader sectionTitle="Contact Me" />

        <SectionRow>
          <SectionColumn>
            <h3>Send me a Message</h3>
            <form id="contact-form" action="/api/mail" method="POST">
              <input type="text" name="name" placeholder="Your name" />
              <input type="email" name="email" placeholder="Your email" />
              <input type="text" name="subject" placeholder="Subject" />
              <textarea placeholder="Your messsage"></textarea>
              <button type="submit" className="submit"><i className="far fa-envelope"></i> Send Message</button>
            </form>
          </SectionColumn>

          <SectionColumn>
            <h3>Follow me online</h3>
            <ul className="social-links">
              <li>
                <Link href="https://www.linkedin.com/in/KyleJosephNovak" title="Connect with me on Linkedin">
                  <button><i className="fab fa-linkedin"></i> Linkedin</button>
                </Link>
              </li>
              <li>
                <Link href="https://www.twitter.com/KyleJosephNovak" title="Follow me on Twitter">
                  <button><i className="fab fa-twitter-square"></i> Twitter</button>
                </Link>
              </li>
              <li>
                <Link href="https://www.github.com/kylenovak" title="Follow me on Github">
                  <button><i className="fab fa-github-square"></i> Github</button>
                </Link>
              </li>
            </ul>
          </SectionColumn>
        </SectionRow>

        <Map />
      </section>
    );
  }
}

export default Contact;
