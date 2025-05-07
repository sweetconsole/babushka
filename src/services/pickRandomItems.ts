
export const pickRandomItems = <T,> (arr: Iterable<T>, n: number): T[] => {
	const shuffled = Array.from(arr).sort(() => 0.5 - Math.random());
	return shuffled.slice(0, n);
};