import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeIndexMenu: 0,
}

const activeItemMenuSlice = createSlice({
    name: 'activeItemMenu',
    initialState,
    reducers: {
      setActiveIndexMenu: (state, action) => {
        state.activeIndexMenu = action.payload;
      },
    },
  });
export const { setActiveIndexMenu } = activeItemMenuSlice.actions;
export default activeItemMenuSlice.reducer
