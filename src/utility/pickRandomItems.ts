
export const pickRandomItems = <T,> (array: Iterable<T>, slice: number): T[] => {
	const shuffled = Array.from(array).sort(() => 0.5 - Math.random());
	return shuffled.slice(0, slice);
};