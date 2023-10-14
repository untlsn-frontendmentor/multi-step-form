export default function getPrice (price: number, isYearly: boolean) {
	if (isYearly) {
		price *= 10;
	}
	const type = isYearly ? 'yr' : 'mo';

	return `$${price}/${type}`;
};
