import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./recipe-detail-service";

export const recipeDetailThunk = createAsyncThunk(
    'recipeDetail',
    async (id) => await service.recipeDetail(id)
)