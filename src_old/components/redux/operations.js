import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const url = 'https://63d4075ac1ba499e54ce4b9f.mockapi.io/api/contacts';

export const fetchContacts = createAsyncThunk('contacts/fetch', async () => {
  const { data } = await axios.get(url);
  return data;
});

export const addContact = createAsyncThunk('contacts/add', async contact => {
  const { data } = await axios.post(url, contact);
  return data;
});

export const deleteContact = createAsyncThunk('contacts/delete', async id => {
  const { data } = await axios.delete(`${url}/${id}`);
  return data;
});
