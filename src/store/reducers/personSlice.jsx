import { createSlice } from '@reduxjs/toolkit'
import { info } from 'autoprefixer'

const initialState = {
  info:null,
}


export const personSlice = createSlice({
    name: 'person',
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
  export const { loadmovie,removemovie } = personSlice.actions
  
  export default personSlice.reducer