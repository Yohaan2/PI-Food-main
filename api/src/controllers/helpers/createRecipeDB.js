const createRecipeDB = (recipedb) => {
	try {
		let arr = [];
		recipedb.forEach((element) => {
			const typeDiet = element.Diets.map((e) => e.dataValues.name);
			const obj = {
				id: element.dataValues.id,
				title: element.dataValues.title,
				image: element.dataValues.image,
				summary: element.dataValues.summary,
				healthScore: element.dataValues.healthScore,
				step: element.dataValues.steps,
				diets: typeDiet,
			};
			arr.push(obj);
		});
		return arr;
	} catch (error) {
		return error.message;
	}
};

module.exports = createRecipeDB;
