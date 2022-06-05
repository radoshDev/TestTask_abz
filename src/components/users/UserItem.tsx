import { FC } from "react"
import Avatar from "@mui/material/Avatar"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { SxProps } from "@mui/material/styles"
import photoCover from "../../assets/photo-cover.svg"
import { User } from "../../types/userTypes"
import WithTooltip from "../ui/WithTooltip"

type Props = {
	user: User
}
const truncStyle: SxProps = {
	textOverflow: "ellipsis",
	overflow: "hidden",
	whiteSpace: "nowrap",
}

const UserItem: FC<Props> = ({ user }) => {
	if (!user) return null
	return (
		<Card sx={{ borderRadius: "10px", boxShadow: "none" }}>
			<Avatar
				src={user.photo || photoCover}
				alt={user.name}
				sx={{ width: 70, height: 70, mx: "auto", mt: "20px" }}
				variant="circular"
			/>
			<CardContent
				sx={{
					textAlign: "center",
					p: "20px",
					"&:last-child": { pb: "20px" },
				}}>
				<Typography component="h5" variant="body1" sx={{ ...truncStyle, mb: "20px" }}>
					<WithTooltip title={user.name} />
				</Typography>
				<Typography variant="body1">{user.position}</Typography>
				<Typography variant="body1" sx={truncStyle}>
					{user.email}
				</Typography>
				<Typography variant="body1">{user.phone}</Typography>
			</CardContent>
		</Card>
	)
}

export default UserItem
