interface LangType {
	[key: string]: string;
}

interface Lang {
	[key: string]: LangType;
}

const lang: Lang = {
	swedish: {
		macro_title: 'Makronutrientmål',
		dietary_restrictions: 'Specialkost',
		name: 'namn',
		price: 'pris',
		carbs: 'kolh.',
		fat: 'fett',
		optimize: 'Optimera!',
		lactose: 'laktos',
		calories: 'kalorier',
		kcal: 'kcal',
		protein: 'protein',
		strict: 'strikt',
		relaxed: 'generös',
		vegan: 'vegan',
		vegetarian: 'vegetarian',
		gluten: 'gluten',
		partitive: 'gram',
		saved: 'sparade',
		increased_allowance: 'ökad gräns',
		costs: 'Till en kostnad av',
		total_cals: 'Totalt energiintag:'
	},
	english: {
		macro_title: 'Macronutrient goals',
		dietary_restrictions: 'Dietary restrictions',
		name: 'name',
		price: 'price',
		carbs: 'carbs',
		fat: 'fat',
		optimize: 'Optimize!',
		lactose: 'lactose',
		vegan: 'vegan',
		vegetarian: 'vegetarian',
		gluten: 'gluten',
		calories: 'calories',
		kcal: 'kcal',
		protein: 'protein',
		strict: 'strict',
		relaxed: 'relaxed',
		partitive: 'grams of',
		saved: 'saved',
		increased_allowance: 'increased allowance',
		costs: 'For the price of',
		total_cals: 'Total calories:'
	}
};
export default lang;
