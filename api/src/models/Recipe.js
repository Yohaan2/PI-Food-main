const { DataTypes, UUID } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		'Recipe',
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
			},
			title: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			image: {
				type: DataTypes.STRING,
				defaultValue:
					'https://www.psykososialberedskap.no/wp-content/themes/rvts_psb_sage-2.0/resources/assets/images/default-placeholder.png',
				validate: {
					isUrl: true,
				},
			},
			summary: {
				type: DataTypes.STRING,
				defaultValue: 'unknown',
			},
			healthScore: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			steps: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
		},
		{
			timestamps: false,
		}
	);
};
