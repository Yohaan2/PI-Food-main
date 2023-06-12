const { Router } = require('express');
const getAllRecipe = require('../../controllers/getAllRecipe');

const router = Router();

router.get('/allrecipe', getAllRecipe);

module.exports = router;
