import { ChangeEventHandler, FC, HTMLInputTypeAttribute } from "react"
import { validateInputs } from "../../../helpers/validateInputs"
import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import {
	addFieldError,
	fulfillField,
	selectOneField,
	selectOneFieldError,
} from "../../../store/slices/formSlice"
import { InputNames } from "../../../types/inputTypes"
import { CssTextField } from "./styles"

type Props = {
	label: string
	name: keyof InputNames
	type?: HTMLInputTypeAttribute
}

const InputText: FC<Props> = ({ label, name, type }) => {
	const dispatch = useAppDispatch()
	const fieldValue = useAppSelector(state => selectOneField(state, name))
	const fieldError = useAppSelector(state => selectOneFieldError(state, name))

	const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
		const { value } = event.target
		const invalidError = validateInputs[name](value)
		if (invalidError && invalidError !== fieldError)
			dispatch(addFieldError({ value: invalidError, field: name }))
		if (name === "phone") {
			if (invalidError === "Only numbers allowed") return
			if (value.length > 13) return
			if (value.length < 4) return
		}

		dispatch(fulfillField({ field: name, value }))

		if (fieldError && !invalidError) dispatch(addFieldError({ value: "", field: name }))
	}
	const handleFocus = (): void => {
		if (name === "phone" && fieldValue === "") {
			dispatch(fulfillField({ field: "phone", value: "+380" }))
		}
	}

	return (
		<CssTextField
			name="name"
			label={label}
			type={type}
			value={fieldValue}
			onChange={handleChange}
			onFocus={handleFocus}
			error={!!fieldError}
			helperText={fieldError}
			variant="outlined"
			color="info"
			fullWidth
		/>
	)
}

export default InputText
