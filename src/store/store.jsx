import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../reducer/formReducer";

const store = configureStore({
    reducer:
    {
        form:formReducer
    }
})

export default store;