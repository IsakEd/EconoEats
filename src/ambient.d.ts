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
	bounds: number[2];
	type: FoodCategory;
}

interface Payload {
	foods: Food[];
	categoryLimits: Limit[];
}

interface FoodCategory {
	dairy: boolean;
	vegetable: boolean;
	fruit: boolean;
	junk: boolean;
	grain: boolean;
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
