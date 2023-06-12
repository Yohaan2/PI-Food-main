const express = require('express');
const allrecipe = require('./getRoutes/routeRecipe');
const RecipeByName = require('./getRoutes/routeRecipeByName');
const RecipeById = require('./getRoutes/routeRecibeById');
const postRecipe = require('./postRoutes/routeCreate');
const Diets = require('./getRoutes/routeDiets');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const server = express();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

server.use(allrecipe);
server.use(RecipeByName);
server.use(RecipeById);
server.use(postRecipe);
server.use(Diets);

module.exports = server;
