import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState:number[] = [
    2020, 2021, 2022, 2023,
]

const YearListSlice = createSlice({
    name:'YearList',
    initialState,
    reducers:{
        addYear:(state, action:PayloadAction<number>)=>{
            if(!action.payload || state.includes(action.payload)){
                return
            }
            state.push(action.payload)
        }
    }
})

export const { addYear } = YearListSlice.actions
export default YearListSlice.reducer