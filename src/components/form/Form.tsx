import { FC } from "react"
import { styled } from "@mui/material/styles"
import { FormFields } from "../../types/inputTypes"
import { useAppSelector } from "../../store/hooks"
import { selectFetchError, selectFields, selectFieldsErrors } from "../../store/slices/formSlice"
import CustomButton from "../ui/CustomButton"
import { FileInput, InputText, Positions } from "./inputs"
import ErrorText from "../ui/ErrorText"

const S = {
	Form: styled("form")({ maxWidth: 380, margin: "0 auto", position: "relative" }),
	ButtonContainer: styled("div")({
		display: "flex",
		justifyContent: "center",
		position: "relative",
	}),
}

type Props = {
	onSubmit: (formData: FormFields) => void
	isLoading: boolean
}

const Form: FC<Props> = ({ onSubmit, isLoading }) => {
	const formFields = useAppSelector(selectFields)
	const formErrors = useAppSelector(selectFieldsErrors)
	const fetchError = useAppSelector(selectFetchError)

	const hasError = Object.values(formErrors).some(value => !value)
	const isNotFulfilled = Object.values(formFields).some(value => !value)

	return (
		<S.Form>
			<InputText label="Your name" name="name" type="text" />
			<InputText label="Email" name="email" type="email" />
			<InputText label="Phone" name="phone" type="tel" />
			<Positions />
			<FileInput />
			<S.ButtonContainer>
				<CustomButton
					disabled={(hasError && isNotFulfilled) || isLoading}
					onClick={() => onSubmit(formFields)}>
					Sign up
				</CustomButton>
				{fetchError && <ErrorText message={fetchError} />}
			</S.ButtonContainer>
		</S.Form>
	)
}

export default Form
