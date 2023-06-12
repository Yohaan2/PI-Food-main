require('dotenv').config();
const axios = require('axios');
const { Recipe, Diet } = require('../db');

const { API_KEY } = process.env;

const getAllRecipe = async (req, res) => {
	try {
		const request = await axios.get(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
		);

		let arr = []; //[{data}, {data2}]
		let obj = {};
		request.data.results.forEach((element) => {
			const { id, title, image, diets, healthScore } = element;
			let typeDiets = diets.map((a) => a.charAt(0).toUpperCase() + a.slice(1, a.length));
			obj = {
				id,
				title,
				image,
				diets: typeDiets,
				healthScore,
			};
			arr.push(obj);
		});
		const search = await Recipe.findAll({ include: [Diet] });
		let obj2 = {};
		search.forEach((element) => {
			let tipo = element.Diets.map((e) => e.dataValues.name);
			const { id, title, image, healthScore } = element.dataValues;

			obj2 = {
				id,
				title,
				image,
				diets: tipo,
				healthScore,
			};
			arr.push(obj2);
		});

		return res.status(200).json(arr);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

module.exports = getAllRecipe;
