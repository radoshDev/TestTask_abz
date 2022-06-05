/* eslint-disable react/no-unescaped-entities */
import { FC } from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import nature from "../../assets/bg-image-650-1170-high.jpg"
import { SIGN_IN_ID } from "../../constants"
import { scrollTo } from "../../helpers/scrollTo"
import CustomButton from "../ui/CustomButton"
import ImageBg from "../ui/ImageBg"

const Greeting: FC = () => {
	return (
		<ImageBg imageSrc={nature}>
			<Box
				sx={{
					maxWidth: 380,
					margin: "16px",
					textAlign: "center",
					color: "rgba(255,255,255,0.87)",
					position: "relative",
				}}>
				<Typography variant="h1" sx={{ mb: "21px" }}>
					Test assignment for front-end developer
				</Typography>
				<Typography variant="body2" sx={{ mb: "32px" }}>
					What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS
					with a vast understanding of User design thinking as they'll be building web interfaces
					with accessibility in mind. They should also be excited to learn, as the world of
					Front-End Development keeps evolving.
				</Typography>
				<CustomButton onClick={scrollTo(SIGN_IN_ID)}>Sing up</CustomButton>
			</Box>
		</ImageBg>
	)
}

export default Greeting
