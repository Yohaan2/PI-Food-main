const { Diet } = require('../../db');

const createDietDB = async (arr) => {
	for (const type of arr) {
		try {
			const createDB = await Diet.create({
				name: type,
			});
		} catch (error) {
			continue;
		}
	}
};

module.exports = createDietDB;
