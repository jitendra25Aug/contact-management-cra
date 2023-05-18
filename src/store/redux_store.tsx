import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./contact-slice";

const store = configureStore({ reducer: contactSlice.reducer });

export default store;