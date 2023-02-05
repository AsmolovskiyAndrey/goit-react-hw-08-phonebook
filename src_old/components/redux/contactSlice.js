import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

export const contactSlice = createSlice({
  name: 'phoneBook',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    addFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.contacts.isLoading = true;
      state.contacts.error = null;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.items = action.payload;
    },
    [fetchContacts.rejected]: state => {
      state.contacts.error = 'Something went wrong, reload please the page...';
    },

    [addContact.pending]: state => {
      state.contacts.isLoading = true;
      state.contacts.error = null;
    },
    [addContact.fulfilled]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.items = [...state.contacts.items, action.payload];
    },
    [addContact.rejected]: state => {
      state.contacts.error = 'Adding went wrong...';
    },

    [deleteContact.pending]: state => {
      state.contacts.isLoading = true;
      state.contacts.error = null;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload.id
      );
    },
    [deleteContact.rejected]: state => {
      state.contacts.error = 'Deleting went wrong...';
    },
  },
});

export const { addFilter } = contactSlice.actions;

export const contactsReducer = contactSlice.reducer;
