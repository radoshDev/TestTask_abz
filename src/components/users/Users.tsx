/* eslint-disable unicorn/no-useless-undefined */
import { Box } from "@mui/material"
import { FC } from "react"
import { useAppSelector } from "../../store/hooks"
import { selectAllUsers, useGetUsersQuery } from "../../store/slices/userSlice"

import UserItem from "./UserItem"

const Users: FC = () => {
	const { isLoading } = useGetUsersQuery(1)

	const users = useAppSelector(selectAllUsers)
	if (isLoading) return <p>Loading...</p>
	if (users.length === 0) return <p>Users not found</p>

	return (
		<Box
			sx={{
				display: "grid",
				gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
				gap: "29px",
			}}>
			{users.map(user => {
				return <UserItem key={user.id} user={user} />
			})}
		</Box>
	)
}

export default Users
