
export const MISDEMEANOURS = [
	'rudeness',
	'vegetables',
	'lift',
	'united',
] as const;

export type Misdemeanour = typeof MISDEMEANOURS[number];

export interface MisdemeanourRecord {
	citizenId: number;
	misdemeanour: Misdemeanour;
	date: string;
	misdemeanourDescription?: string
}
