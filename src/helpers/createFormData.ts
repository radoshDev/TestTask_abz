import { FormFields } from "../types/inputTypes"

export const createFormData = (formFields: FormFields): FormData => {
	const formData = new FormData()
	Object.entries(formFields).forEach(([key, value]) => {
		if (value) {
			if (typeof value === "number") {
				const newKey = key === "positionId" ? "position_id" : key
				formData.append(newKey, `${value}`)
			} else {
				formData.append(key, value)
			}
		}
	})
	return formData
}
