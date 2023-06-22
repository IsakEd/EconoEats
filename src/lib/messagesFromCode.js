// Code is here referring to the status code from the GLPK package
const messagesFromCode = {
	1: {
		text: {
			english: 'Error: solution is undefined',
			swedish: 'Fel: Lösningen är odefinierad'
		},
		subtext: {
			english: 'Try reloading the page or send a bug report',
			swedish: 'Prova att uppdatera sidan eller skicka in en felrapport'
		},
		color: 'red'
	},
	2: {
		text: {
			english: 'Solution is feasible',
			swedish: 'Lösningen är möjlig'
		},
		subtext: {
			english: "So maybe that means it's good?",
			swedish: 'Så kanske det betyder att det är bra?'
		}
	},
	3: {
		text: {
			english: 'Solution is infeasible',
			swedish: 'Lösningen är omöjlig'
		},
		subtext: {
			english:
				'There was something wrong with the calculation. Do you want to send a bug report so I can check out why?',
			swedish:
				'Något gick fel med beräkningen. Vill du skicka in en felrapport så kan jag undersöka varför?'
		},
		color: 'red'
	},
	4: {
		text: {
			english: 'No feasible solution exists',
			swedish: 'Det finns ingen möjlig lösning'
		},
		subtext: {
			english:
				'The requirements are too tight, there is no possible solution. Try adding more foods or increase the limits.',
			swedish:
				'Kraven är för strikta, det finns ingen möjlig lösning. Försök lägga till mer mat eller öka begränsningarna.'
		},
		color: 'red'
	},
	5: {
		text: {
			english: 'Optimal solution found!',
			swedish: 'Optimal lösning hittad!'
		},
		subtext: {
			english: 'This is the lowest cost to satisfy all requirements:',
			swedish: 'Detta är den lägsta kostnaden för att uppfylla alla krav:'
		},
		color: 'var(--primary-em)'
	}
};
export default messagesFromCode;
