import {createSlice} from '@reduxjs/toolkit'



const Categoryslice = createSlice({
    name : "category",
    initialState :{
        category : "All",

    },

    reducers : {
        setCategory : (state , action)=>{
            state.category= action.payload;
        }
    }
})


export const {setCategory} = Categoryslice.actions;
export default Categoryslice.reducer