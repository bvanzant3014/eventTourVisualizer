let cleanSentence = function(value) {
	let lowerCaseStrings = value.toLowerCase().split(" ");
	var result = "";
	for (var i = 0; i < lowerCaseStrings.length; i++ ){
		if (i !== 0) {
			result+="-";
		}
		result+= lowerCaseStrings[i];
	}
	return result;
}

export {cleanSentence};