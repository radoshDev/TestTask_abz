import Box from "@mui/material/Box"
import { SxProps, Theme } from "@mui/material/styles"
import { FC, ReactNode } from "react"

type Props = {
	children: ReactNode
	imageSrc: string
}

const styles =
	(image: string): SxProps<Theme> =>
	({ breakpoints }) => ({
		backgroundImage: `url(${image})`,
		backgroundRepeat: "no-repeat",
		backgroundPosition: "bottom",
		backgroundColor: "lightgray",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		position: "relative",
		"&::before": {
			content: "''",
			position: "absolute",
			top: 0,
			left: 0,
			bottom: 0,
			right: 0,
			bgcolor: "rgba(0,0,0,0.5)",
			pointerEvents: "none",
		},
		[breakpoints.up("xs")]: {
			height: 500,
			backgroundSize: "cover",
		},
		[breakpoints.up(500)]: {
			// backgroundSize: "180%",
		},
		[breakpoints.up(768)]: {
			// backgroundSize: "130%",
		},
		[breakpoints.up(800)]: {
			backgroundSize: "cover",
			height: 650,
		},
		[breakpoints.up(1200)]: {
			backgroundSize: "cover",
			mx: "15px",
		},
	})

const ImageBg: FC<Props> = ({ children, imageSrc }) => {
	return (
		<Box component="section" sx={styles(imageSrc)}>
			{children}
		</Box>
	)
}

export default ImageBg
