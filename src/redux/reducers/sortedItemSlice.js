import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sortedItem: [],
}

const sortedItemSlice = createSlice({
    name: 'sortedItem',
    initialState,
    reducers: {
        setSortedItem : (state, action) => {
            state.sortedItem = action.payload;
        }
    }

});

export const { setSortedItem } = sortedItemSlice.actions;
export default sortedItemSlice.reducer;
