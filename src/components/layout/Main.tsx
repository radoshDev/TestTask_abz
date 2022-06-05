import { FC, ReactNode } from "react"
import Box from "@mui/material/Box"
import { SxProps, Theme } from "@mui/material/styles"

type Props = {
	children: ReactNode
}

const styles: SxProps<Theme> = {
	bgcolor: "#F8F8F8",
	pb: "100px",
}

const Main: FC<Props> = ({ children }) => {
	return (
		<Box component="main" sx={styles}>
			{children}
		</Box>
	)
}

export default Main
