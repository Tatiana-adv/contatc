// src/store/contactsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      { id: '1', name: 'João Silva', email: 'joao@email.com', phone: '11999999999' }
    ]
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    removeContact: (state, action) => {
      state.items = state.items.filter(c => c.id !== action.payload);
    },
    editContact: (state, action) => {
      const index = state.items.findIndex(c => c.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    }
  }
});

export const { addContact, removeContact, editContact } = contactsSlice.actions;
export default contactsSlice.reducer;

// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer
  }
});
