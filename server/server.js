import express from 'express';
import { handler } from '../..build/handler.js';
import bodyParser from 'body-parser';
import solveLP from '$lib/solve.js';

const app = express();
const port = 3000;

app.post('/calculate', bodyParser.json(), (req, res) => {
	const { foods, categoryLimits, foodItemLimits } = req.body;
	res.json(solveLP(foods, categoryLimits, foodItemLimits));
});

app.use(handler);

app.listen(port, () => {
	console.log(`Server is running on port ${port}.`);
});
