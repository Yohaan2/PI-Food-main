const getApi = (data) => {
	let arr = [];

	data.forEach((element) => {
		const {
			id,
			title,
			healthScore,
			image,
			summary,
			analyzedInstructions,
			diets,
			preparationMinutes,
		} = element;

		let instruction = '';
		let resumen = summary.replace(/(<([^>]+)>)/gi, '');
		let typeDiets = diets.map((a) => a.charAt(0).toUpperCase() + a.slice(1, a.length));

		if (analyzedInstructions.length === 0) {
			instruction = 'none';
		} else {
			analyzedInstructions[0].steps.map((e, i) => {
				let index = i + 1;
				instruction += `Paso ${index}: ${e.step} `;
			});
		}

		const lista = {
			id,
			title,
			healthScore,
			image,
			summary: resumen,
			step: instruction,
			diets: typeDiets,
			preparationMinutes,
		};
		arr.push(lista);
	});
	return arr;
};

module.exports = getApi;
