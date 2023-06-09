import postData from '$lib/postData';
import { json } from '@sveltejs/kit';

// TODO: This NEEDS end to end type safety if I ever need to rework this

//This should be at least half legit since this shouldn't be accessible from the client
const server = 'http://44.202.140.228/calculate';

const optimizeOnServer = async (obj: Payload) => {
	try {
		console.log(obj.foods);
		const res = await postData(server, obj);
		return res.result;
	} catch (error) {
		// Handle the error gracefully
		console.error('An error occurred:', error);
		// You can choose to do something specific in case of an error, such as setting a default value for results or showing an error message to the user
		return 'An error occurred when connecting to the server'; // Set results to an empty array as a default value
	}
};

export async function POST({ request }) {
	const payload: Payload = await request.json();
	const response = await optimizeOnServer(payload);
	return json(response);
}
