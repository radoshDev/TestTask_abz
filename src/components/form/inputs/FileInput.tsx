/* eslint-disable jsx-a11y/label-has-associated-control */
import { Button, styled, Box, SxProps } from "@mui/material"
import { ChangeEventHandler, FC, useEffect } from "react"
import { BLACK_COLOR } from "../../../constants"
import { validateInputs } from "../../../helpers/validateInputs"
import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import {
	addFieldError,
	fulfillField,
	selectOneField,
	selectOneFieldError,
} from "../../../store/slices/formSlice"
import ErrorText from "../../ui/ErrorText"

const S = {
	InputBox: styled("div")({
		display: "flex",
		marginBottom: "50px",
		userSelect: "none",
		position: "relative",
	}),
	Input: styled("input")({ display: "none" }),
	UploadButton: styled(Button)(({ color, theme }) => {
		const errorColor = theme.palette.error.main
		const isError = color === "error"
		return {
			color: BLACK_COLOR,
			textTransform: "none",
			borderRadius: "4px 0px 0px 4px",
			padding: 0,
			borderColor: isError ? errorColor : BLACK_COLOR,
			"&:hover": {
				borderColor: isError ? errorColor : "#D0CFCF",
				backgroundColor: "transparent",
			},
		}
	}),
	Label: styled("label")(({ theme, datatype }) => {
		const isError = Boolean(datatype)
		return {
			display: "inline-block",
			padding: "11px 14px",
			cursor: "pointer",
			borderWidth: "1px",
			borderStyle: "solid",
			borderColor: isError ? theme.palette.error.main : "transparent",
			borderRadius: "3px 0px 0px 3px",
		}
	}),
}

const placeHolderStyle: SxProps = {
	borderStyle: "solid",
	borderLeft: "none",
	flex: "100px 1 1",
	borderRadius: "0 4px 4px 0",
	p: "14px 16px",
}

const FileInput: FC = () => {
	const dispatch = useAppDispatch()
	const photoValue = useAppSelector(state => selectOneField(state, "photo"))
	const photoError = useAppSelector(state => selectOneFieldError(state, "photo"))

	const handleFileChange: ChangeEventHandler<HTMLInputElement> = event => {
		const { files } = event.target
		const photo = files?.[0]
		if (!photo && photoValue) return

		const validationError = validateInputs.photo(photo)
		if (validationError) {
			dispatch(addFieldError({ field: "photo", value: validationError }))
			dispatch(fulfillField({ field: "photo", value: undefined }))
			return
		}
		if (photo && !validationError) {
			dispatch(fulfillField({ field: "photo", value: photo }))
			if (photoError) dispatch(addFieldError({ field: "photo", value: "" }))
		}
	}
	useEffect(() => {
		if (photoValue) {
			const fileReader = new FileReader()

			fileReader.addEventListener("load", event => {
				const imgSource = event.target?.result
				if (!imgSource || typeof imgSource !== "string") return
				const img = new Image()
				img.src = imgSource
				img.addEventListener("load", () => {
					if (img.width < 70 || img.height < 70) {
						dispatch(addFieldError({ field: "photo", value: "Minimum size of photo 70x70px" }))
						dispatch(fulfillField({ field: "photo", value: undefined }))
					}
				})
			})
			fileReader.readAsDataURL(photoValue)
		}
	}, [photoValue?.name])

	return (
		<S.InputBox>
			<S.Input
				type="file"
				id="file-upload"
				accept="image/jpeg,image/jpg"
				onChange={handleFileChange}
			/>
			<S.UploadButton variant="outlined" color={photoError ? "error" : "info"}>
				<S.Label datatype={photoError} htmlFor="file-upload">
					Upload
				</S.Label>
			</S.UploadButton>
			<Box
				color={photoValue ? BLACK_COLOR : "#7E7E7E"}
				border={({ palette }) =>
					photoError ? `2px solid ${palette.error.main}` : "1px solid #D0CFCF"
				}
				sx={placeHolderStyle}>
				{photoValue?.name || "Upload your photo"}
			</Box>
			{photoError && <ErrorText message={photoError} />}
		</S.InputBox>
	)
}

export default FileInput
