import { FC } from "react"
import NavBar from "./header/NavBar"
import Main from "./layout/Main"
import Greeting from "./header/Greeting"
import Layout from "./layout/Layout"
import UsersSection from "./users/UsersSection"
import FormSection from "./form/FormSection"

const App: FC = () => {
	return (
		<>
			<NavBar />
			<Main>
				<Layout cover>
					<Greeting />
				</Layout>
				<Layout>
					<>
						<UsersSection />
						<FormSection />
					</>
				</Layout>
			</Main>
		</>
	)
}

export default App
