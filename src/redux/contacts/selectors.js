import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/slice";

export const selectIsModalOpen = (state) => state.contacts.isModalOpen;

export const selectEditingContact = (state) => state.contacts.editingContact;

export const selectContacts = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter], 
    (contacts, nameFilter) => {
        return contacts.filter((contact) => contact.name.toLowerCase().includes(nameFilter.toLowerCase()));
    });