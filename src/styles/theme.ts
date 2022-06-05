import { createTheme } from "@mui/material/styles"
import { BLACK_COLOR, WHITE_COLOR } from "../constants"

declare module "@mui/material/styles" {
	interface Theme {
		status: {
			danger: string
		}
	}
	interface ThemeOptions {
		status?: {
			danger?: string
		}
	}
}

export const theme = createTheme({
	palette: {
		primary: {
			main: "#F4E041",
			light: "#FFE302",
		},
		secondary: {
			main: "#00BDD3",
		},
		error: {
			main: "#CB3D40",
		},
		info: {
			main: "#D0CFCF",
			dark: "#7E7E7E",
		},
		action: {
			disabled: WHITE_COLOR,
			disabledBackground: "#B4B4B4",
		},
	},
	typography: {
		fontFamily: "Nunito, sans-serif",
		fontSize: 16,
		fontWeightRegular: 400,
		h1: {
			fontSize: 40,
			lineHeight: "40px",
			fontWeight: 400,
			textAlign: "center",
		},
		body1: {
			fontWeight: 400,
			fontSize: 16,
			lineHeight: "26px",
			color: BLACK_COLOR,
		},
		body2: {
			fontWeight: 400,
			fontSize: 16,
			lineHeight: "26px",
			color: WHITE_COLOR,
		},
	},
})
