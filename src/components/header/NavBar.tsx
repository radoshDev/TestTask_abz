import { FC } from "react"
import { AppBar, Box, Toolbar } from "@mui/material"
import logo from "../../assets/Logo.svg"
import Layout from "../layout/Layout"
import CustomButton from "../ui/CustomButton"
import { USERS_ID, SIGN_IN_ID } from "../../constants"
import { scrollTo } from "../../helpers/scrollTo"

const NavBar: FC = () => {
	return (
		<AppBar color="transparent" position="static" sx={{ boxShadow: "none" }}>
			<Layout>
				<Toolbar sx={({ breakpoints }) => ({ [breakpoints.up("xs")]: { minHeight: 60, px: 0 } })}>
					<Box component="img" src={logo} alt="testtask" sx={{ mr: "auto" }} />
					<Box sx={{ display: "flex", gap: 2 }}>
						<CustomButton onClick={scrollTo(USERS_ID)}>Users</CustomButton>
						<CustomButton onClick={scrollTo(SIGN_IN_ID)}>Sign Up</CustomButton>
					</Box>
				</Toolbar>
			</Layout>
		</AppBar>
	)
}

export default NavBar
