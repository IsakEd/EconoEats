interface Food {
	name: string;
	data: {
		price: number;
		kcal: number;
		carbs: number;
		fat: number;
		protein: number;
	};
	suitable: SuitabilityCriteria;
}

type SuitabilityCriteria = {
	vegan: boolean;
	vegetarian: boolean;
	lactose: boolean;
	gluten: boolean;
};
interface Limit {
	name: string;
	bounds: number[];
}
