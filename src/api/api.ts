/* eslint-disable unicorn/prevent-abbreviations */
import {
	createApi,
	fetchBaseQuery,
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react"
import { setToken } from "../store/slices/formSlice"
import { RootState } from "../store/store"
import { TokenResponse } from "../types/userTypes"

const baseUrl = "https://frontend-test-assignment-api.abz.agency/api/v1"

const baseQuery = fetchBaseQuery({
	baseUrl,
	prepareHeaders: (headers, { getState, type }) => {
		const { token } = (getState() as RootState).form
		if (token && type === "mutation") {
			headers.set("Token", token)
		}
		return headers
	},
})

const baseQueryWithToken: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
	args,
	api,
	extraOptions
) => {
	if (api.type === "mutation") {
		const tokenResult = await baseQuery("/token", api, extraOptions)
		const tokenResponse = tokenResult.data as TokenResponse | undefined
		if (tokenResponse) {
			api.dispatch(setToken(tokenResponse.token))
		}
	}
	const result = await baseQuery(args, api, extraOptions)
	return result
}

export const api = createApi({
	reducerPath: "api",
	baseQuery: baseQueryWithToken,
	tagTypes: ["User"],
	endpoints: () => ({}),
})
