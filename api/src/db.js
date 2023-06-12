require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const RecipeModel = require('./models/Recipe');
const DietModel = require('./models/Diet');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/food`, {
	logging: false, // set to console.log to see the raw SQL queries
	native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

RecipeModel(sequelize);
DietModel(sequelize);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Recipe, Diet } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Recipe.belongsToMany(Diet, { through: 'RecipeDiet', timestamps: false });
Diet.belongsToMany(Recipe, { through: 'RecipeDiet', timestamps: false });

module.exports = {
	...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
	conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
