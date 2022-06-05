import { FC } from "react"
import Tooltip, { tooltipClasses, TooltipProps } from "@mui/material/Tooltip"
import { styled } from "@mui/material/styles"
import { BLACK_COLOR } from "../../constants"

const S = {
	Span: styled("span")({
		cursor: "pointer",
	}),
	Tooltip: styled(({ className, ...props }: TooltipProps) => (
		<Tooltip {...props} classes={{ popper: className }} />
	))({
		[`& .${tooltipClasses.tooltip}`]: {
			maxWidth: "90vw",
			backgroundColor: BLACK_COLOR,
			fontSize: "16px",
			padding: "3px 16px",
		},
	}),
}

type Props = {
	title: string
}

const WithTooltip: FC<Props> = ({ title }) => {
	return (
		<S.Tooltip title={title} disableFocusListener>
			<S.Span>{title}</S.Span>
		</S.Tooltip>
	)
}

export default WithTooltip
