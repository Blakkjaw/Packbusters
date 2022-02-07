import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import { enableMapSet } from 'immer'
// it's a requirement to call immer enableMapSet(), do not remove this line https://github.com/reduxjs/redux-toolkit/issues/466
enableMapSet();

export default configureStore({
  reducer: {
      user: userSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
}
)