/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { FieldsErrors, FormFields } from "../../types/inputTypes"
import { RootState } from "../store"

type State = {
	fields: FormFields
	fieldsErrors: FieldsErrors
	isSuccess: boolean
	fetchError: string
	token: string
}

type Values<T> = T[keyof T]

type Payload<Type> = Values<{
	[Key in keyof Type]: {
		field: Key
		value: Type[Key]
	}
}>

type FulfilledFieldsAction = PayloadAction<Payload<FormFields>>
type AddFieldErrorsAction = PayloadAction<Payload<FieldsErrors>>

const initialState: State = {
	fields: {
		email: "",
		name: "",
		phone: "",
		photo: undefined,
		positionId: 0,
	},
	fieldsErrors: {
		email: "",
		name: "",
		phone: "",
		photo: "",
	},
	fetchError: "",
	token: "",
	isSuccess: false,
}

const formSlice = createSlice({
	name: "form",
	initialState,
	reducers: {
		fulfillField: (state: State, action: FulfilledFieldsAction) => {
			const { field, value } = action.payload
			// @ts-expect-error
			state.fields[field] = value
		},
		addFieldError: (state: State, action: AddFieldErrorsAction) => {
			const { field, value } = action.payload
			state.fieldsErrors[field] = value
		},
		addFetchError: (state: State, action: PayloadAction<string>) => {
			state.fetchError = action.payload
		},
		success: (state: State) => {
			state.fields = initialState.fields
			state.fetchError = ""
			state.isSuccess = true
		},
		setToken: (state: State, action: PayloadAction<string>) => {
			state.token = action.payload
		},
	},
})

export const selectFields = (state: RootState): FormFields => state.form.fields
export const selectOneField = <Field extends keyof FormFields = keyof FormFields>(
	state: RootState,
	field: Field
): FormFields[Field] => state.form.fields[field]
export const selectFieldsErrors = (state: RootState): FieldsErrors => state.form.fieldsErrors
export const selectOneFieldError = <Field extends keyof FieldsErrors = keyof FieldsErrors>(
	state: RootState,
	field: Field
): FieldsErrors[Field] => state.form.fieldsErrors[field]
export const selectFetchError = (state: RootState): State["fetchError"] => state.form.fetchError
export const selectIsSuccess = (state: RootState): State["isSuccess"] => state.form.isSuccess

export const { addFieldError, fulfillField, addFetchError, success, setToken } = formSlice.actions

export default formSlice.reducer
