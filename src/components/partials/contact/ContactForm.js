import React, { Component } from 'react';
import formService from '../../../services/formService';
import './styles/contactForm.css';

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.form = new formService.Form(['name', 'email', 'subject', 'message']);

    this.state = {
      showMessages: false,
      formMessage: '',
      mailSent: false,
      formSubmit: false,
      spinner: false,
      fields: this.form.getFormFields()
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.form.validate();

    if (this.form.isValid()) {
      let formFields = this.form.getFormFields();

      this.setState({spinner: true});

      fetch('/api/mail/contact', {
        method: 'POST',
        body: JSON.stringify(formFields),
        headers: { 'Content-Type': 'application/json' }
      })
        .then(res => {
          return res.json();
        })
        .then(json => {
          let success = json.success;
          let message = json.message;

          this.setState({
            mailSent: success,
            formSubmit: true,
            formMessage: message,
            spinner: false
          });
        })
        .catch(err => {
          this.setState({
            mailSent: false,
            formSubmit: true,
            formMessage: "Something went wrong, please try again.",
            spinner: false
          });
        });
    }
    else {
      this.setState({
        mailSent: false,
        formSubmit: false,
        showMessages: true,
        fields: this.form.getFormFields()
      });
    }
  }

  handleChange(e) {
    const input = e.target;

    this.form.isValidInput(input);

    this.setState({
      formSubmit: false,
      showMessages: true,
      fields: this.form.getFormFields()
    });
  }

  handleClick(e) {
    this.setState({formSubmit: false});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange} className={this.state.showMessages ? 'messages' : ''}>
        <h3>Send me a Message</h3>

        <div className="input-wrapper">
          <div className={`form-alert ${ this.state.formSubmit && this.state.mailSent ? 'success-message ' : 'hidden' }`}>
            {this.state.formMessage}
            <i onClick={this.handleClick} className="fas fa-times close" title="Hide message"></i>
          </div>
          <div className={`form-alert ${ this.state.formSubmit && !this.state.mailSent ? 'error-message' : 'hidden' }`}>
            {this.state.formMessage}
            <i onClick={this.handleClick} className="fas fa-times close" title="Hide message"></i>
          </div>

          <div className={`${ this.state.fields.name.error ? 'error' : 'valid' }`}>
            <div className="error-message">
              {this.state.fields.name.message}
            </div>
            <input type="text" name="name" placeholder="Your name" />
          </div>

          <div className={`${ this.state.fields.email.error ? 'error' : 'valid' }`}>
            <div className="error-message">
              {this.state.fields.email.message}
            </div>
            <input type="text" name="email" placeholder="Your email" />
          </div>

          <div className={`${ this.state.fields.subject.error ? 'error' : 'valid' }`}>
            <div className="error-message">
              {this.state.fields.subject.message}
            </div>
            <input type="text" name="subject" placeholder="Subject" />
          </div>

          <div className={`${ this.state.fields.message.error ? 'error' : 'valid' }`}>
            <div className="error-message">
              {this.state.fields.message.message}
            </div>
            <textarea name="message" placeholder="Your messsage"></textarea>
          </div>
        </div>
        
        <button type="submit" className="submit">
          <i className={`fas fa-sync-alt ${this.state.spinner ? 'spin' : 'hidden'}`}></i>
          <span className={this.state.spinner ? 'hidden' : ''}>
            <i className="far fa-envelope"></i> Send Message
          </span>
        </button>
      </form>
    );
  }
}

export default ContactForm;
