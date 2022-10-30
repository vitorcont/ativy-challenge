export const validateEmpty = (value: string) => {
	if (value) {
		return true;
	}

	return false;
};

export const validateEqual = (value: string, secondValue: string) => {
	return value === secondValue;
};
