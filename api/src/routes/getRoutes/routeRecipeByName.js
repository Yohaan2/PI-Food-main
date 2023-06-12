const { Router } = require('express');
const getRecipeByName = require('../../controllers/getRecipeByName');

const router = Router();

router.get('/recipe/name', getRecipeByName);

module.exports = router;
