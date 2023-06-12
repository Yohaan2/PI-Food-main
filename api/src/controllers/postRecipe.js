const { Recipe, Diet } = require('../db');
const relacionPost = require('../controllers/helpers/relacionPost');

const postRecipe = async (req, res) => {
	try {
		const titleRegex = new RegExp(/^[A-Za-z\s]+$/);
		const imageRegex = new RegExp(
			/^(http(s)?:\/\/)?[a-zA-Z0-9\-]+(\.[a-zA-Z0-9\-]+)*(\.[a-zA-Z]{2,})(:\d{2,5})?(\/[^\s]*)?$/
		);
		const { title, summary, image, healthScore, steps, diets } = req.body;
		if (![title, healthScore, steps].every(Boolean)) {
			return res.status(200).json({ error: 'Faltan Datos' });
		}
		if (!titleRegex.test(title) || !imageRegex.test(image)) {
			throw Error('Debes verificar lo campos requeridos');
		}

		const post = await Recipe.create({
			title,
			summary: summary ? summary : undefined,
			image: image ? image : undefined,
			healthScore,
			steps,
			diets,
		});

		relacionPost(post, diets);
		res.status(200).json({ post: post.id });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = postRecipe;
