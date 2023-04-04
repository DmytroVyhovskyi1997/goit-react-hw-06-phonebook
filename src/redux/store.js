import { configureStore } from '@reduxjs/toolkit';
import {contactsReducer} from './reducer';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: ""
  }
});

export { store };