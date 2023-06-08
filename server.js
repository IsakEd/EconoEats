/* 
!IMPORTANT

This code is hosted on an AWS server and is separate from the application, which is hosted on Vercel.
The reasoning for this is that using the node-adapter in sveltekit disturbs the normal workflow and SSR inherent to SvelteKit

Note to self: Stop the server with 'ps aux | grep "node server"' and then 'kill PID'


*/

import express from 'express';
import bodyParser from 'body-parser';
import solveLP from './src/lib/solve.js';
import cors from 'cors';

const app = express();
const port = 80; // TODO: nginx reverse proxy to avoid using port 80 for security reasons
app.use(cors());

app.post('/calculate', bodyParser.json(), (req, res) => {
	const { foods, categoryLimits, foodItemLimits } = req.body;
	res.json(solveLP(foods, categoryLimits, foodItemLimits));
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}.`);
});
