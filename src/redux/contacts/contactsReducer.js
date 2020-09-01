import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactsAction from './contactsAction';

const contactsTools = createReducer([], {
  [contactsAction.addTask]: (state, action) => [...state, action.payload.task],
  [contactsAction.removeTask]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const filterTools = createReducer('', {
  [contactsAction.nameCheck]: (state, action) => action.payload,
});

export default combineReducers({
  contacts: contactsTools,
  filter: filterTools,
});
