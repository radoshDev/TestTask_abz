/* eslint-disable no-promise-executor-return */
export const fetchCount = (amount = 1): Promise<{ data: number }> => {
	return new Promise<{ data: number }>(resolve => setTimeout(() => resolve({ data: amount }), 500))
}
