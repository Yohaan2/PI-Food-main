const { Router } = require('express');
const router = Router();
const getRecipeById = require('../../controllers/getRecipeById');

router.get('/recipe/:idRecipe', async (req, res) => {
	getRecipeById(req, res);
});

module.exports = router;
