import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// thunk example to make requests
/* export const refreshAccessDataThunk = createAsyncThunk('users/refreshAccessData', 
     async () => {
    const userAccessData = await fetchUserAccessData();
    return userAccessData;
});
 */

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    authenticatedUser: null
  },
  reducers: {
    setAuthenticatedUser: (state,action) => {
      state.authenticatedUser = {...state.authenticatedUser,...action.payload}
    }
  },
  // add async calls here to modify the state
  /* extraReducers: {
    [refreshAccessDataThunk.fulfilled]: (state, action) => {
      state.accessData = action.payload;
    }
  } */
})

// Action creators are generated for each case reducer function
export const {  setAuthenticatedUser } = userSlice.actions

export default userSlice.reducer