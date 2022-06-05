import React from "react"
import { createRoot } from "react-dom/client"
import { ThemeProvider } from "@mui/material/styles"
import "./index.css"
import { Provider } from "react-redux"
import { store } from "./store/store"
import App from "./components/App"
import { theme } from "./styles/theme"

const container = document.getElementById("root")
if (!container) throw new Error("#root element not found")

const root = createRoot(container)
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</Provider>
	</React.StrictMode>
)
