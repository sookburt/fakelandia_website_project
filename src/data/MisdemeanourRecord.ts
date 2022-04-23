
export const MISDEMEANOURS = [
	'rudeness',
	'vegetables',
	'lift',
	'united',
] as const;

export type Misdemeanours = typeof MISDEMEANOURS[number];

export interface MisdemeanourRecord {
	citizenId: number;
	misdemeanour: Misdemeanours;
	date: string;
	misdemeanourDescription?: string
}
