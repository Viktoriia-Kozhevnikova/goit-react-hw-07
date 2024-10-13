import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://670bf5737e5a228ec1cf2913.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll",
    async (_, thunkApi) => {
    try {
        const { data } = await axios.get('/contacts');
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.massage);
    }
    })

export const addContact = createAsyncThunk("contacts/addContact",
    async (newContact, thunkApi) => {
    try {
        const { data } = await axios.post('/contacts', newContact);
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.massage);
    }
        })    

export const deleteContact = createAsyncThunk("contacts/deleteContact",
    async (id, thunkApi) => {
    try {
        const { data } = await axios.get(`/contacts/${id}`);
        return data.id;
    } catch (error) {
        return thunkApi.rejectWithValue(error.massage);
    }
})        