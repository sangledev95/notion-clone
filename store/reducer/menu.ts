import { createReducer } from "@reduxjs/toolkit";
import { setSelectedMenu } from "../action/menu";

interface CounterState {
  selectedMenu: unknown;
}

const initialState: CounterState = { selectedMenu: {} };

const menuReducer = createReducer(initialState, (builder) => {
  builder.addCase(setSelectedMenu, (state, action) => {
    state.selectedMenu = action.payload;
  });
});

export default menuReducer;
