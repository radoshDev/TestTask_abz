import { FC, MouseEventHandler, ReactNode } from "react"
import Button from "@mui/material/Button"
import { SxProps, Theme } from "@mui/material/styles"

type Props = {
	children: ReactNode
	disabled?: boolean
	onClick?: MouseEventHandler<HTMLButtonElement>
}

const style: SxProps<Theme> = ({ palette }) => ({
	boxShadow: "none",
	textTransform: "initial",
	borderRadius: 20,
	height: 34,
	px: "22px",
	":hover": { bgcolor: palette.primary.light, boxShadow: "none" },
})

const CustomButton: FC<Props> = ({ children, ...restProps }) => {
	return (
		<Button variant="contained" sx={style} {...restProps}>
			{children}
		</Button>
	)
}

export default CustomButton
