import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./recipes-service";

export const recipesThunk = createAsyncThunk(
    'recipes',
    async () => await service.recipes()
)