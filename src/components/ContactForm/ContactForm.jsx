import propTypes from 'prop-types';

import React, { useState } from 'react';

import { nanoid } from 'nanoid';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

import Button from '@mui/material/Button';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = evt => {
    evt.preventDefault();

    const data = {
      name: name,
      id: nanoid(),
      number: number,
    };

    const isContactAlreadyAdded = contacts.find(
      contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );
    if (isContactAlreadyAdded) {
      return window.alert(
        `${isContactAlreadyAdded.name} is already in the contacts`
      );
    }

    dispatch(addContact(data));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="formfield">
        <h2 className="title">Name</h2>
        <input
          className="input"
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          key={nanoid}
          onChange={handleNameChange}
        />

        <h2 className="title">Number</h2>
        <input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleNumberChange}
          className="input"
        />

        <br></br>
        <Button variant="contained" type="submit">
          Add contact
        </Button>
      </div>
    </form>
  );
};

ContactForm.propTypes = {
  name: propTypes.string,
  number: propTypes.string,
};
