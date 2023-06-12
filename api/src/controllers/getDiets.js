const { Diet } = require('../db');
const axios = require('axios');
const { API_KEY } = process.env;
const createDietDB = require('./helpers/createDietDB');

const getDiets = async (req, res) => {
	try {
		const request = await axios.get(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
		);
		let resultsMaping = [];
		let dietsmaping = request.data.results.map((a) => {
			return a.diets.forEach((element) => {
				resultsMaping.push(element);
			});
		});

		let setDiet = new Set(resultsMaping);
		let arrDiet = Array.from(setDiet);
		let resultDiets = arrDiet.map((a) => a.charAt(0).toUpperCase() + a.slice(1, a.length));
		createDietDB(resultDiets);

		return res.status(200).json(resultDiets);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

module.exports = getDiets;
