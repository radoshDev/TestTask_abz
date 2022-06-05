import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { api } from "../api/api"
import formReducer from "./slices/formSlice"

console.log(process.env.NODE_ENV)

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
		form: formReducer,
	},
	middleware: getDefaultMiddleware => [
		...getDefaultMiddleware({ serializableCheck: false }),
		api.middleware,
	],
	devTools: process.env.NODE_ENV === "development",
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
