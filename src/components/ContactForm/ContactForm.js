// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
  ContactSpan,
  Form,
  InputBox,
  ContactInput,
  SubmitButton,
} from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handelSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form className="form" onSubmit={this.handelSubmit}>
        <InputBox>
          <ContactInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
          <ContactSpan>Name</ContactSpan>
        </InputBox>
        <InputBox>
          <ContactInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
          <ContactSpan>Number</ContactSpan>
        </InputBox>
        <SubmitButton type="submit">Add contact</SubmitButton>
      </Form>
    );
  }
}

export default ContactForm;

ContactForm.propType = {
  name: PropTypes.string,
  number: PropTypes.string,
  handelSubmit: PropTypes.func,
};
