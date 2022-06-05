import { createEntityAdapter, createSelector } from "@reduxjs/toolkit"
import { api } from "../../api/api"
import {
	CreateUserRequest,
	CreateUserResponse,
	Position,
	PositionsResponse,
	TokenResponse,
	User,
	UsersResponse,
} from "../../types/userTypes"
import { RootState } from "../store"

const usersAdapter = createEntityAdapter<User>({
	selectId: user => user.id,
	sortComparer: (a, b) => b.registration_timestamp - a.registration_timestamp,
})

const initialState = usersAdapter.getInitialState({ totalPages: 0 })

const usersSelectors = usersAdapter.getSelectors()

type UsersState = typeof initialState

export const userSlice = api.injectEndpoints({
	endpoints: builder => ({
		getUsers: builder.query<UsersState, number>({
			query: page => `/users?page=${page}&count=6`,
			transformResponse: (response: UsersResponse) => {
				if (initialState.totalPages !== response.total_pages) {
					initialState.totalPages = response.total_pages
				}
				return usersAdapter.setAll(initialState, response.users)
			},
			async onQueryStarted(page, { queryFulfilled, dispatch }) {
				const { data } = await queryFulfilled
				if (page > 1) {
					dispatch(
						userSlice.util.updateQueryData("getUsers", 1, draft => {
							usersAdapter.addMany(draft, usersSelectors.selectAll(data))
						})
					)
				}
			},
			providesTags: ["User"],
		}),
		createUser: builder.mutation<CreateUserResponse, CreateUserRequest>({
			query: ({ formData }) => ({
				url: "/users",
				method: "POST",
				body: formData,
			}),
			invalidatesTags: ["User"],
		}),
		getPositions: builder.query<Position[], void>({
			query: () => "/positions",
			transformResponse: (response: PositionsResponse) => response.positions,
		}),
		getToken: builder.query<string, void>({
			query: () => "/token",
			transformResponse: (response: TokenResponse) => response.token,
		}),
	}),
})

export const {
	useGetUsersQuery,
	useLazyGetUsersQuery,
	useGetPositionsQuery,
	useLazyGetTokenQuery,
	useCreateUserMutation,
	endpoints,
} = userSlice

const selectUserResult = endpoints.getUsers.select(1)
const selectUserData = createSelector(selectUserResult, userResult => userResult.data)

export const { selectAll: selectAllUsers, selectTotal: selectTotalPage } =
	usersAdapter.getSelectors<RootState>(state => selectUserData(state) ?? initialState)
