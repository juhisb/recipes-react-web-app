import {createAsyncThunk} from "@reduxjs/toolkit";

import * as service from "./search-service";

export const searchThunk = createAsyncThunk(
    'search', async (query) =>  await service.search(query)
)