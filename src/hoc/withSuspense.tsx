import { ReactElement, ReactNode, Suspense } from "react"

const withSuspense = (component: ReactNode): ReactElement => <Suspense>{component}</Suspense>

export default withSuspense
