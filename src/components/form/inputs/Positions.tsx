import { Box, RadioGroup, Typography } from "@mui/material"
import { FC, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import { fulfillField, selectOneField } from "../../../store/slices/formSlice"
import { useGetPositionsQuery } from "../../../store/slices/userSlice"
import { FormFields } from "../../../types/inputTypes"
import PositionsOption from "./PositionsOption"

const Positions: FC = () => {
	const dispatch = useAppDispatch()
	const positionId = useAppSelector(state => selectOneField(state, "positionId"))
	const { data: positions, isLoading } = useGetPositionsQuery()

	const setPosition = (position: FormFields["positionId"]): void => {
		dispatch(fulfillField({ field: "positionId", value: position }))
	}

	useEffect(() => {
		if (positions) {
			setPosition(positions[0].id)
		}
	}, [positions?.[0].id])

	if (isLoading) return <p>Loading...</p>
	if (!positions) return <p>Positions not found</p>

	return (
		<Box sx={{ mb: "50px" }}>
			<Typography>Select your position</Typography>
			<RadioGroup name="positions" onChange={(_, value) => setPosition(Number(value))}>
				{positions.map(({ id, name }) => (
					<PositionsOption key={id} label={name} value={id} checked={positionId === id} />
				))}
			</RadioGroup>
		</Box>
	)
}

export default Positions
