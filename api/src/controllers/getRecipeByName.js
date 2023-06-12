const { Recipe, Diet } = require('../db');
const { API_KEY } = process.env;
const { Op } = require('sequelize');
const axios = require('axios');
const getApi = require('./helpers/getApi');
const data = require('../utils/recipe.json');
const createRecipeDB = require('./helpers/createRecipeDB');

const getRecipeByName = async (req, res) => {
	try {
		const { name } = req.query;
		let named = name.toLowerCase();

		const nameDB = await Recipe.findAll({
			where: {
				title: {
					[Op.iLike]: `%${named}%`,
				},
			},
			include: [Diet],
		});

		if (nameDB.length > 0) {
			const result = createRecipeDB(nameDB);
			return res.status(200).json(result);
		}

		const request = await axios.get(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
		);

		const filter = request?.data.results.filter((e) => {
			return e.title.toLowerCase().includes(named);
		});

		if (filter.length > 0) {
			const lista = getApi(filter);
			return res.status(200).send(lista);
		}

		return res.status(200).json({ error: 'Not Found' });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = getRecipeByName;
