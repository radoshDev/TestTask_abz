export type FormFields = {
	name: string
	email: string
	phone: string
	positionId: number
	photo: File | undefined
}

export type InputNames = Omit<FormFields, "positionId" | "photo">

export type ValidateFields = InputNames & Pick<FormFields, "photo">

export type FieldsErrors = { [key in keyof ValidateFields]: string }
export type ValidateInputs = {
	[key in keyof ValidateFields]: (value: ValidateFields[key]) => string
}
