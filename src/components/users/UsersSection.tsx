import { FC } from "react"
import { USERS_ID } from "../../constants"
import Section from "../layout/Section"
import ShowMore from "./ShowMore"
import Users from "./Users"

const UsersSection: FC = () => {
	return (
		<Section title="Working with GET request" id={USERS_ID}>
			<Users />
			<ShowMore />
		</Section>
	)
}

export default UsersSection
