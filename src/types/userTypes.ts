export type User = {
	id: string
	name: string
	email: string
	phone: string
	position: string
	position_id: string
	registration_timestamp: number
	photo: string
}

export type UsersResponse = {
	success: boolean
	page: number
	total_pages: number
	total_users: number
	count: number
	links: {
		next_url: string
		prev_url: unknown
	}
	users: User[]
}

export type PositionsResponse = {
	success: boolean
	positions: Position[]
}

export type Position = {
	id: number
	name: string
}

export type TokenResponse = {
	success: boolean
	token: string
}

export type CreateUserRequest = {
	formData: FormData
}

export type CreateUserResponse = {
	success: boolean
	message: string
}
