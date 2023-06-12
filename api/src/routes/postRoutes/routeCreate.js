const { Router } = require('express');
const postRecipe = require('../../controllers/postRecipe');

const router = Router();

router.post('/recipe', postRecipe);

module.exports = router;
