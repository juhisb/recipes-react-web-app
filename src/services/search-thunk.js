import {createAsyncThunk} from "@reduxjs/toolkit";
import {search} from "./search-service";

export const searchThunk = createAsyncThunk(
    'search', async (query) =>  search(query)
)