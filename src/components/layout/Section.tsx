import { FC, ReactNode } from "react"
import { Box, Typography } from "@mui/material"

type Props = {
	title: string
	children: ReactNode
	id?: string
}

const Section: FC<Props> = ({ title, children, id }) => {
	return (
		<Box component="section" sx={{ mt: "140px" }} id={id}>
			<Typography variant="h1" sx={{ mb: "50px" }}>
				{title}
			</Typography>
			{children}
		</Box>
	)
}

export default Section
