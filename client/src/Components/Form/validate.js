const validate = (data) => {
	const titleRegex = new RegExp(/^[A-Za-z\s]+$/);
	const numberRegex = new RegExp(/^(?:100|[1-9][0-9]?)$/);
	const imageRegex = new RegExp(
		/^(http(s)?:\/\/)?[a-zA-Z0-9\-]+(\.[a-zA-Z0-9\-]+)*(\.[a-zA-Z]{2,})(:\d{2,5})?(\/[^\s]*)?$/
	);

	let error = { boton: true };
	if (data.title && data.healthScore && data.steps) {
		error.boton = false;
	}
	if (!titleRegex.test(data.title)) {
		error.title = 'You must put only letters';
		error.boton = true;
	}
	if (!data.title) {
		error.titleVacio = 'You need to fill this field';
	}
	if (!numberRegex.test(data.healthScore)) {
		error.healthScore = 'Must not exceed 100';
		error.boton = true;
	}
	if (!imageRegex.test(data.image)) {
		error.image = 'You have to put a url';
		error.boton = true;
	}
	if (!data.steps) {
		error.steps = 'You need to fill this field';
	}
	return error;
};

export default validate;
