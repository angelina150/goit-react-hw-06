import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = {
  items: [],
};

const contactSlice = createSlice({
  name: "contact",
  initialState: INITIAL_STATE,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});
export const contactsSlice = contactSlice.reducer;
export const { addContact, deleteContact } = contactSlice.actions;
export const selectContacts = (state) => state.contacts.items;
