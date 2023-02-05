//! ==========SELECTORS ==============
export const getContacts = state => state.phoneBook.contacts.items;
export const getFilter = state => state.phoneBook.filter;
export const getStatus = state => state.phoneBook.contacts.isLoading;
export const getError = state => state.phoneBook.contacts.error;
