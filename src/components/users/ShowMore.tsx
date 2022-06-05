import { FC, useState } from "react"
import Box from "@mui/material/Box"
import { useAppSelector } from "../../store/hooks"
import { selectTotalPage, useLazyGetUsersQuery } from "../../store/slices/userSlice"
import CustomButton from "../ui/CustomButton"

const ShowMore: FC = () => {
	const [page, setPage] = useState(2)
	const [getUsers, { isFetching }] = useLazyGetUsersQuery()
	const totalPages = useAppSelector(selectTotalPage)
	const isNoMorePages = page > totalPages

	const handleGetUsers = async (): Promise<void> => {
		await getUsers(page)
		setPage(page + 1)
	}
	if (isNoMorePages) return null
	return (
		<Box sx={{ display: "flex", justifyContent: "center", mt: "50px" }}>
			<CustomButton onClick={handleGetUsers} disabled={isFetching}>
				Show more
			</CustomButton>
		</Box>
	)
}

export default ShowMore
