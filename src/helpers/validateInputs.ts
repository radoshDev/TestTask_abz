/* eslint-disable regexp/no-dupe-characters-character-class */
/* eslint-disable regexp/control-character-escape */
/* eslint-disable unicorn/no-hex-escape */
/* eslint-disable no-control-regex */
/* eslint-disable unicorn/escape-case */
/* eslint-disable unicorn/better-regex */
/* eslint-disable regexp/optimal-quantifier-concatenation */
import { ALLOWED_IMAGES } from "../constants"
import { ValidateInputs } from "../types/inputTypes"

const maxFileSize = 1_000_000

export const validateInputs: ValidateInputs = {
	name(value) {
		switch (true) {
			case value.length === 0:
				return "Required"
			case value.length < 2:
				return "Num must be at least 2 characters"
			case value.length > 60:
				return "Name must be max 15 characters"
			default:
				return ""
		}
	},
	email(value) {
		const regEx =
			/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/

		if (value.length === 0) return "Required"
		if (!regEx.test(value)) return "Incorrect email"

		return ""
	},
	phone(value) {
		const regEx = /\D/
		if (value.length === 0) return "Required"
		if (value.slice(4).search(regEx) >= 0) {
			return "Only numbers allowed"
		}
		if (value.length < 13) {
			return "Incorrect phone number length"
		}
		return ""
	},
	photo(value) {
		if (!value) return "Photo is required"
		if (!ALLOWED_IMAGES.includes(value.type)) return `Not allowed file type ${value.type}`
		if (value && value.size > maxFileSize) return "Photo size must be less than 5MB"
		return ""
	},
}
