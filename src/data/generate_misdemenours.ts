import getCitizenId from "../helpers/CitizenId";
import { Misdemeanours, MisdemeanourRecord, MISDEMEANOURS } from "./MisdemeanourRecord";
/**
 * Borrowed and adapted from TechReturners.
*/
export default async function generateMisdemeanours(
	number: number
): Promise<Array<MisdemeanourRecord>> {
	// pretend this is an API we're calling, wait 1.5s
	await sleep(1500);

	let amount = number ?? 50;

	const misdemeanours = [];

	for (let i = 0; i < amount; i++) {
		misdemeanours.push({
			citizenId: getCitizenId(),
			misdemeanour: choose<Misdemeanours>([...MISDEMEANOURS]),
			date: new Date().toLocaleDateString(),
		});
	}

	return misdemeanours;
}

/// take just one T from an array of T
function choose<T>(arr: Array<T>): T {
	if (!arr) arr = [];
	return arr[Math.floor(Math.random() * arr.length)];
}

// In the real world, you wouldn't want to fake a 'sleep' like this, but for our purposes of faking an API
// this quick-and-dirty solution will do the job.
const sleep = async (milliseconds: number) => {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
