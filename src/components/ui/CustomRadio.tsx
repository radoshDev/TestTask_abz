import { FC } from "react"
import Radio from "@mui/material/Radio"
import { styled } from "@mui/material/styles"
import { FormControlLabel } from "@mui/material"

const BpIcon = styled("span")({
	borderRadius: "50%",
	width: 20,
	height: 20,
	border: "1px solid #D0CFCF",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	"input:disabled ~ &": {
		boxShadow: "none",
		background: "rgba(206,217,224,.5)",
	},
})

const BpCheckedIcon = styled(BpIcon)(({ theme }) => ({
	borderColor: theme.palette.secondary.main,
	"&:before": {
		content: "''",
		width: 10,
		height: 10,
		borderRadius: "50%",
		background: theme.palette.secondary.main,
	},
}))

const CustomRadio: FC = () => {
	return (
		<FormControlLabel
			value="female"
			label="Female"
			control={<Radio color="secondary" icon={<BpIcon />} checkedIcon={<BpCheckedIcon />} />}
		/>
	)
}

export default CustomRadio
