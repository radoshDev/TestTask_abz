import { FC } from "react"
import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react"
import { SIGN_IN_ID } from "../../constants"
import { useCreateUserMutation } from "../../store/slices/userSlice"
import { FormFields } from "../../types/inputTypes"
import { CreateUserResponse } from "../../types/userTypes"
import Section from "../layout/Section"
import Form from "./Form"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { addFetchError, selectIsSuccess, success } from "../../store/slices/formSlice"
import { createFormData } from "../../helpers/createFormData"
import Success from "./Success"

const FormSection: FC = () => {
	const dispatch = useAppDispatch()
	const isSuccess = useAppSelector(selectIsSuccess)
	const [createUser, { isLoading }] = useCreateUserMutation()

	const handleSubmit = async (formFields: FormFields): Promise<void> => {
		try {
			const formData = createFormData(formFields)
			await createUser({ formData }).unwrap()
			dispatch(success())
		} catch (_error) {
			const error = _error as FetchBaseQueryError
			const errorData = error.data as CreateUserResponse
			dispatch(addFetchError(errorData.message))
		}
	}
	if (isSuccess) return <Success />
	return (
		<Section title="Working with POST request" id={SIGN_IN_ID}>
			<Form onSubmit={handleSubmit} isLoading={isLoading} />
		</Section>
	)
}

export default FormSection
