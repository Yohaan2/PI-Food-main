const { Recipe, Diet } = require('../db');
const axios = require('axios');
const { API_KEY } = process.env;
const createRecipeDB = require('./helpers/createRecipeDB');
const getApi = require('./helpers/getApi');
const { results } = require('../utils/recipe.json');

const getrRecipeById = async (req, res) => {
	try {
		const { idRecipe } = req.params;
		if (!isNaN(idRecipe)) {
			const request = await axios.get(
				`https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${API_KEY}&`
			);
			const { data } = request;

			const lista = getApi([data]);
			return res.status(200).json(lista);
		} else {
			const recipedb = await Recipe.findByPk(idRecipe, { include: [Diet] });

			const createdDB = createRecipeDB([recipedb]);

			if (!createdDB) throw Error('Not Found');
			return res.status(200).json(createdDB);
		}
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

module.exports = getrRecipeById;
