import { MouseEventHandler } from "react"

export const scrollTo =
	(id: string): MouseEventHandler =>
	() => {
		const section = document.getElementById(id)
		if (section) {
			section.scrollIntoView({ behavior: "smooth", block: "start" })
		}
	}
