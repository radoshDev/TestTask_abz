import TextField from "@mui/material/TextField"
import { styled, SxProps, Theme } from "@mui/material/styles"

export const helperTextStyles: SxProps<Theme> = theme => ({
	position: "absolute",
	top: "100%",
	fontSize: "12px",
	color: theme.palette.error.main,
	lineHeight: 1,
	margin: "4px 14px",
})

export const CssTextField = styled(TextField)(({ theme }) => ({
	marginBottom: "50px",
	input: {
		padding: "15.5px 16px",
	},
	"& label": {
		color: theme.palette.info.dark,
	},
	"& label.Mui-focused": {
		color: theme.palette.info.dark,
		"&.Mui-error": {
			color: theme.palette.error.main,
		},
	},
	"& .MuiOutlinedInput-root": {
		"&.Mui-error fieldset": {
			borderWidth: "2px",
		},
		"&.Mui-focused fieldset": {
			borderWidth: "1px",
		},
		"&.Mui-focused.Mui-error fieldset": {
			borderWidth: "2px",
		},
	},
	"& .MuiFormHelperText-root": helperTextStyles(theme),
}))
