import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = "https://66a2b89b967c89168f20ed1f.mockapi.io/";

export const fetchContacts = createAsyncThunk("contacts/getAll", async(_, thunkAPI) => {
 try {
    const response = await axios.get("/contacts");
    return response.data;
} catch(error) {
    return thunkAPI.rejectWithValue(error.message);
}
});

export const addContact = createAsyncThunk("contacts/addContact", async(newContact, thunkAPI) => {
 try {
    const response = await axios.post('/contacts', newContact);
    return response.data;
} catch(error) {
    return thunkAPI.rejectWithValue(error.message);
}
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async(contactId, thunkAPI) => {
 try {
    const response = await axios.delete(`/contacts/${contactId}`);
    return response.data;
} catch(error) {
    return thunkAPI.rejectWithValue(error.message); 
}
})
