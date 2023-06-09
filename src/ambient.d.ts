interface Food {
	name: string;
	data: {
		price: number; // currency/kg
		kcal: number; // calories/100g
		carbs: number; //carbohydrates/100g
		fat: number; // fat/100g
		protein: number; // protein/100g
	};
	suitable: SuitabilityCriteria;
	bounds: number[2]; // 0 to a big portion size
	type: FoodCategory;
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

interface Payload {
	foods: Food[];
	categoryLimits: Limit[];
}

interface Limit {
	name: string;
	bounds: number[];
}

type Language = 'swedish' | 'english';

interface Currency {
	id: string;
	endonym: string;
	symbol: string;
	shorthand: string;
}
