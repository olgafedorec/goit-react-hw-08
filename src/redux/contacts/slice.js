import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, editContact } from "./operations";
import { logOut } from "../auth/operations";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        loading: false,
        error: false,
        isModalOpen: false,  
        editingContact: null,
        },
    
        reducers: {
            openModal: (state, action) => {
                state.isModalOpen = true;
                state.editingContact = action.payload;
            },
            closeModal: (state) => {
                state.isModalOpen = false;
                state.editingContact = null;
            },
        },

    extraReducers: (builder) => {
        builder.addCase(fetchContacts.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(fetchContacts.fulfilled, (state, action) => {
            state.items = action.payload;
            state.loading = false;
        }).addCase(fetchContacts.rejected, (state) => {
            state.loading = false;
            state.error = true;
        }).addCase(addContact.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(addContact.fulfilled, (state, action) => {
            state.items.push(action.payload);
            state.loading = false;
        }).addCase(addContact.rejected, (state) => {
            state.loading = false;
            state.error = true;
        }).addCase(deleteContact.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(deleteContact.fulfilled, (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
            state.loading = false;
        }).addCase(deleteContact.rejected, (state) => {
            state.loading = false;
            state.error = true;
        }).addCase(logOut.fulfilled, (state) => {
            state.items = [];
            state.error = null;
            state.loading = false;
        }).addCase(editContact.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(editContact.fulfilled, (state, action) => {
            const index = state.items.findIndex(contact => contact.id === action.payload.id);
            if(index !== -1) {
                state.items[index] = action.payload;
            }
        
            state.loading = false;
        }).addCase(editContact.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })
    },
});

export const { openModal, closeModal } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;