import { FC } from "react"
import Section from "../layout/Section"
import successImage from "../../assets/success-image.svg"
import { SIGN_IN_ID } from "../../constants"

const Success: FC = () => {
	return (
		<Section title="User successfully registered" id={SIGN_IN_ID}>
			<img src={successImage} alt="Form success" style={{ display: "block", margin: "0 auto" }} />
		</Section>
	)
}

export default Success
