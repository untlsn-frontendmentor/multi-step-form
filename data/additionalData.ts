const additionalData = [
	{ title: 'Online service', price: 1, description: 'Access to multiplayer games' },
	{ title: 'Larger storage', price: 1, description: 'Extra 1TB of cloud save' },
	{ title: 'Customizable Profile', price: 2, description: 'Custom theme on your profile' },
];

export type AdditionalData = typeof additionalData[number]

export default additionalData;
