// import React, { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { useSelector, useDispatch } from 'react-redux';
import { getStatus, getError } from './redux/selectors';

import { fetchContacts } from './redux/operations';
import { useEffect } from 'react';

export const App = () => {
  const myStatus = useSelector(getStatus);
  const myError = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>My Contacts</h2>
        {myStatus && !myError && <strong>Loading Phonebook ...</strong>}
        {myError && <strong>{myError}</strong>}
        <Filter />
        <ContactList />
      </div>
    </>
  );
};
