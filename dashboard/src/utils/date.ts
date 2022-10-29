import { DateTime } from "luxon";

export const treatShortDate = (date?: string) => {
	return date
		? DateTime.fromISO(date as string).toLocaleString(DateTime.DATE_SHORT)
		: "-";
};
