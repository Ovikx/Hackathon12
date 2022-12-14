import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'auth',
    initialState: {
      value: false,
    },
    reducers: {
      toggle: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value = !state.value;
      },

      login: (state) => {
        state.value = true;
      },

      logout: (state) => {
        state.value = false;
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { toggle, login, logout } = counterSlice.actions
  
  export default counterSlice.reducer