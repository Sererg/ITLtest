import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PersonItem } from "../../pages/mainPage/MainPage";

const initialState: PersonItem[] = [];
const favoriteSlice = createSlice({
    name: 'allFavorites',
    initialState,
    reducers: {
        addFavorites: (state, action: PayloadAction<PersonItem>)=>{
            state.push(action.payload);
        },
    }
})

export const { addFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer