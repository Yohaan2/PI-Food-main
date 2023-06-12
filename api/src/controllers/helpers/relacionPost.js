const { Diet } = require('../../db');

const relacionPost = async (recipe, diets) => {
	diets.map(async (a) => {
		const mapingdiets = await Diet.findAll({ where: { name: a } });
		if (mapingdiets) await recipe.addDiet(mapingdiets);
	});
};

module.exports = relacionPost;
