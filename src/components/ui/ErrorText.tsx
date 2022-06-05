import { FC } from "react"
import Typography from "@mui/material/Typography"
import { SxProps, Theme } from "@mui/material/styles"

export const styles: SxProps<Theme> = theme => ({
	position: "absolute",
	top: "100%",
	fontSize: "12px",
	color: theme.palette.error.main,
	lineHeight: 1,
	margin: "4px 14px",
})

type Props = {
	message: string
}

const ErrorText: FC<Props> = ({ message }) => {
	return <Typography sx={styles}>{message}</Typography>
}

export default ErrorText
