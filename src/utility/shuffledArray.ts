

export const shuffledArray = <T,> (array: Array<T>): T[] => {
	return array.sort(() => Math.random() - 0.5)
}