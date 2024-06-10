import { createSlice } from "@reduxjs/toolkit"
const formSlice =createSlice({
    name:"form",
    initialState:{
        inputFields:[]
    },
    reducers:{
     addInputField(state,action)
     {
        state.inputFields.push(action.payload);
     },
     removeInputField(state)
     {
        state.inputFields.pop();
     }

    }
}
)
export const {addInputField,removeInputField} =formSlice.actions;
export default formSlice.reducer;