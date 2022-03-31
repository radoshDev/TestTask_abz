declare namespace NodeJS {
	interface ProcessEnv {
		NODE_ENV: "development" | "production" | "test"
		CUSTOM_VARIABLE: string
	}
}
