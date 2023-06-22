// Not yet implemented as of 21/6

fetch(
	'https://api.nal.usda.gov/fdc/v1/foods/list?dataType=Foundation&pageSize=25&pageNumber=2&api_key=IWKglaz6UTJJABSncPPcwu5cpYzqn2pDMQGdX4X7'
)
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
	})
	.catch((error) => console.log('Error:', error));
