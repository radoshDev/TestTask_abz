import { FC, ReactElement } from "react"
import Container from "@mui/material/Container"

type Props = {
	children: ReactElement
	cover?: boolean
}

const Layout: FC<Props> = ({ children, cover }) => {
	return (
		<Container
			maxWidth="lg"
			sx={({ breakpoints }) =>
				cover
					? {
							[breakpoints.up("xs")]: {
								px: 0,
							},
					  }
					: {
							[breakpoints.up("xs")]: {
								px: "16px",
							},
							[breakpoints.down(1025)]: {
								maxWidth: 934,
							},
					  }
			}>
			{children}
		</Container>
	)
}

export default Layout
