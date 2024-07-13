import { createSlice } from "@reduxjs/toolkit";
import { Carter_One } from "next/font/google";
import { AppState } from "./store";


export interface DataState {
    layoutDisposition: boolean;//true-> row / false-> card
}


const initialState: DataState ={
    layoutDisposition:true,
}

export const dataSlice = createSlice({
    name:"data",
    initialState,
    reducers:{
        setLayoutState(state,action){
            state.layoutDisposition = action.payload;
        },
    },
});


export const getLayoutDisposition = (state:AppState) =>state.data.layoutDisposition;
export const {setLayoutState} = dataSlice.actions;

export default dataSlice.reducer;