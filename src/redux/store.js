import { configureStore } from "@reduxjs/toolkit";
import activeItemMenuReducer from './reducers/menuSlice';
import activeItemFilterReducer from './reducers/filterSlice';
import sortedItemReducer from './reducers/sortedItemSlice' ;


export const store = configureStore({
    reducer: {
        activeItemMenu: activeItemMenuReducer,
        activeItemFilter: activeItemFilterReducer,
        sortedItem: sortedItemReducer,
    }
})



