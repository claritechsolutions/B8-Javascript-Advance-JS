import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


const initialState = {
    data: []
}
export const fetchUsers = createAsyncThunk('fetchUsers', async () => {
    const response = await axios.get('http://localhost:3001/user');
    return response;

})
export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.data = action.payload.data
        })
    }
})

export default usersSlice.reducer;