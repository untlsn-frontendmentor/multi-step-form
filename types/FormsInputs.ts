export type FirstPageFormInputs = {
	name:  string,
	email: string,
	phone: string,
}

export type SecondPageFormInputs = {
	selected: number,
	isYearly: boolean,
}

export type TupleFormInputs = [FirstPageFormInputs, SecondPageFormInputs, boolean[]];
export type FlatFormInputs = FirstPageFormInputs & SecondPageFormInputs & { additional: boolean[] }
