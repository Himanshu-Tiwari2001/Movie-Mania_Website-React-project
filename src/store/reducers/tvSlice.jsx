import { createSlice } from '@reduxjs/toolkit'
import { info } from 'autoprefixer'


const initialState = {
  info:null,
}


export const tvSlice = createSlice({
    name: 'tv',
    initialState,
    reducers: {
        loadmovie:(state,actions) => {
         state.info =action.payload
          },

          removemovie:(state,actions) => {
            state.info =null;
             },
       }
  });
  
  // Action creators are generated for each case reducer function
  export const { loadmovie,removemovie } = tvSlice.actions
  
  export default tvSlice.reducer