import { configureStore } from '@reduxjs/toolkit'
import { generalSlice } from './slices/'

const store = configureStore({
  reducer: generalSlice.reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})


export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const selectGeneral = (state:RootState) => state
export default store;
