let seatGeakRequestHandler =  function(inputString, ){
	const baseURL = 'https://api.seatgeek.com/2/events?performers.slug='; // Get 10 random users
	const clientString = '&per_page=100&client_id=MTgzNjYzMjF8MTU2ODI1NTkzNS41OA';
	return baseURL+inputString+clientString;
}

export {seatGeakRequestHandler}