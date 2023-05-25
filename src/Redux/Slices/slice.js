import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";




const fetchData = createAsyncThunk("fetchImageAPI", async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/photos");
    console.log(response);
    return response;
});

const imageSlice = createSlice({
    name: "fetchImage",
    initialState: {
        loadingStatus: false,
        errorStatus: false,
        datas: null
    },
    extraReducers: (generator) => {
        generator.addCase(fetchData.pending, (state, action) => {
            state.loadingStatus = true;
        });
        generator.addCase(fetchData.fulfilled, (state, action) => {
            state.datas = action.payload;
            state.loadingStatus = false;
            state.errorStatus = false;
        });
        generator.addCase(fetchData.rejected, (state, action) => {
            state.datas = null;
            state.errorStatus = true;
            state.loadingStatus = false;
        });
    }
    
})

export default imageSlice.reducer;