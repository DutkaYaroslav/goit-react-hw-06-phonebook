import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactList/ContactList';
import { CSSTransition } from 'react-transition-group';
import './App.css';

export default function App() {
  return (
    <div>
      <div className="phonebook">
        <h2 className="phonebook-head">Phonebook</h2>
      </div>
      <ContactForm />
      <h2 className="contacts-styles">Contacts</h2>
      <ContactsList />
    </div>
  );
}
