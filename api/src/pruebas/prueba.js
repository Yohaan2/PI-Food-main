// let arr = [
// 	{
// 		diet: ['gluten free', 'vegan', 'dairy free', 'lacto ovo vegetarian', 'vegan'],
// 		title: 'holaaa',
// 	},
// ];

// let maping = arr.map((a) => a.diet);
// console.log(maping);

// let copy = new Set(arr);
// let copyarr = [...copy]
// console.log(Array.isArray(copyarr),copyarr);

// let obj = [
// 	{
// 		id: 782585,
// 		title: 'Cannellini Bean and Asparagus Salad with Mushrooms',
// 		healthScore: 100,
// 		image: 'https://spoonacular.com/recipeImages/782585-556x370.jpg',
// 		summary:
// 			'Cannellini Bean and Asparagus Salad with Mushrooms requires approximately <b>45 minutes</b> from start to finish. This main course has <b>482 calories</b>, <b>31g of protein</b>, and <b>6g of fat</b> per serving. This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe serves 6 and costs <b>$1.35 per serving</b>. 309 people were impressed by this recipe. Head to the store and pick up grain mustard, sea salt, lemon zest, and a few other things to make it today. It is brought to you by foodandspice.blogspot.com. Taking all factors into account, this recipe <b>earns a spoonacular score of 70%</b>, which is pretty good. Similar recipes are <a href="https://spoonacular.com/recipes/cannellini-bean-salad-422994">Cannellini Bean Salad</a>, <a href="https://spoonacular.com/recipes/refreshing-cannellini-bean-salad-113127">Refreshing Cannellini Bean Salad</a>, and <a href="https://spoonacular.com/recipes/cannellini-and-green-bean-salad-33177">Cannellini-and-Green Bean Salad</a>.',
// 		step: [
// 			'Paso 1: Rinse the cannellini beans and soak for 8 hours or overnight in several inches of water.,Paso 2: Drain and rinse, then transfer to a medium saucepan and cover with fresh water.,Paso 3: Add the curry leaves or bay leaf and bring to a boil. Reduce heat to medium-low, cover, and simmer for 1 hour or until the beans are tender but not falling apart.,Paso 4: Drain and transfer to a large salad bowl.Meanwhile, snap the woody ends off of the asparagus spears and steam the spears for 6 minutes or until just tender but still retaining their crunch.,Paso 5: Transfer to the salad bowl.Now cook the mushrooms.,Paso 6: Heat the oil in a large skillet over high heat. As soon as the oil is hot, drop in the mushrooms and cook, stirring constantly, for 5 minutes or until the mushrooms begin to brown and lose some of their liquid.,Paso 7: Transfer to the bowl with the asparagus.To make the dressing, combine the tarragon, lemon zest, garlic, lemon juice, olive oil and mustard in a small food processor or blender. Process until smooth.,Paso 8: Pour the dressing over the salad, season with salt and pepper, and toss.,Paso 9: Serve at room temperature or chilled.',
// 			'',
// 		],
// 		diets: ['gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan'],
// 	},
// ];

// let sinEtiquetas = obj[0].summary.replace(/(<([^>]+)>)/gi, '');

// let pasos = obj[0].step[0].split('.').length;
// console.log(pasos);

// let arr = ['hola', 'como', 'uyil', 'asno'];
// let modified = arr.sort();
// console.log(modified);

// const items = [
// 	{ name: 'Cannellini Bean and Asparagus Salad with Mushrooms', value: 21 },
// 	{ name: 'Berry Banana Breakfast Smoothie', value: 37 },
// 	{ name: 'Red Lentil Soup with Chicken and Turnips', value: 45 },
// 	{ name: 'zsparagus and Pea Soup: Real Convenience Food', value: -12 },
// 	{ name: 'Garlicky Kale', value: 13 },
// 	{ name: 'Slow Cooker Beef Stew', value: 37 },
// ];
// let hola = items.sort(function (a, b) {
// 	if (a.name < b.name) {
// 		return 1;
// 	}
// 	if (a.name > b.name) {
// 		return -1;
// 	}
// 	// a must be equal to b
// 	return 0;
// });
// console.log(hola);

// const lista = [
// 	{ title: 'easy hay algo aqui' },
// 	{ title: 'hay algo easy aqui' },
// 	{ title: 'easy toma' },
// 	{ title: 'nose' },
// ];

// const filtered = lista.filter((a) => a.title.includes('easy'));
// console.log(filtered);

//let diets: "gluten free, dairy free, lacto ovo vegetarian, vegan"
// let error = {
// 	boton: false,
// };

// error.tile = 'hola';
// error.algo = 'algo';
// console.log(error);

// let arr = [8, 6, 1, 8, 35, 9, 2, 69];
// console.log(arr.sort((a, b) => b - a));

// let arr = [
// 	{
// 		id: 782585,
// 		title: 'Cannellini Bean and Asparagus Salad with Mushrooms',
// 		image: 'https://spoonacular.com/recipeImages/782585-312x231.jpg',
// 		diets: ['Gluten free', 'Dairy free', 'Lacto ovo vegetarian', 'Vegan'],
// 		healthScore: 100,
// 	},
// 	{
// 		id: 716426,
// 		title: 'Cauliflower, Brown Rice, and Vegetable Fried Rice',
// 		image: 'https://spoonacular.com/recipeImages/716426-312x231.jpg',
// 		diets: ['Gluten free', 'Dairy free', 'Lacto ovo vegetarian', 'Vegan'],
// 		healthScore: 75,
// 	},
// 	{
// 		id: 715497,
// 		title: 'Berry Banana Breakfast Smoothie',
// 		image: 'https://spoonacular.com/recipeImages/715497-312x231.jpg',
// 		diets: ['Lacto ovo vegetarian'],
// 		healthScore: 64,
// 	},
// 	{
// 		id: 715415,
// 		title: 'Red Lentil Soup with Chicken and Turnips',
// 		image: 'https://spoonacular.com/recipeImages/715415-312x231.jpg',
// 		diets: ['Gluten free', 'Dairy free'],
// 		healthScore: 100,
// 	},
// 	{
// 		id: 716406,
// 		title: 'Asparagus and Pea Soup: Real Convenience Food',
// 		image: 'https://spoonacular.com/recipeImages/716406-312x231.jpg',
// 		diets: [
// 			'Gluten free',
// 			'Dairy free',
// 			'Paleolithic',
// 			'Lacto ovo vegetarian',
// 			'Primal',
// 			'Vegan',
// 		],
// 		healthScore: 100,
// 	},
// 	{
// 		id: 644387,
// 		title: 'Garlicky Kale',
// 		image: 'https://spoonacular.com/recipeImages/644387-312x231.jpg',
// 		diets: [
// 			'Gluten free',
// 			'Dairy free',
// 			'Paleolithic',
// 			'Lacto ovo vegetarian',
// 			'Primal',
// 			'Whole 30',
// 			'Vegan',
// 		],
// 		healthScore: 83,
// 	},
// 	{
// 		id: 715446,
// 		title: 'Slow Cooker Beef Stew',
// 		image: 'https://spoonacular.com/recipeImages/715446-312x231.jpg',
// 		diets: ['Gluten free', 'Dairy free'],
// 		healthScore: 100,
// 	},
// 	{
// 		id: '8ee5ed99-5541-454d-af00-23a9a84b063a',
// 		title: 'prueba',
// 		image: 'https://www.cocinacaserayfacil.net/wp-content/uploads/2020/03/Recetas-faciles-de-cocinar-y-sobrevivir-en-casa-al-coronavirus_2.jpg',
// 		diets: [],
// 		healthScore: 1,
// 	},

// 	{
// 		id: '1cdc9df6-c443-4627-8c89-a851cbe66bed',
// 		title: 'a',
// 		image: 'https://www.cocinacaserayfacil.net/wp-content/uploads/2020/03/Recetas-faciles-de-cocinar-y-sobrevivir-en-casa-al-coronavirus_2.jpg',
// 		diets: [],
// 		healthScore: 2,
// 	},
// 	{
// 		id: 'e4584fa9-fbb5-4c6d-8b42-12f9074aea5b',
// 		title: 'pasta con aaaqueso',
// 		image: 'https://www.cocinacaserayfacil.net/wp-content/uploads/2020/03/Recetas-faciles-de-cocinar-y-sobrevivir-en-casa-al-coronavirus_2.jpg',
// 		diets: ['primal', 'paleolithic', 'lacto ovo vegetarian', 'dairy free', 'gluten free'],
// 		healthScore: 1,
// 	},
// 	{
// 		id: '7ad520e6-439b-47c8-9c73-09b77acb8ab9',
// 		title: 'holaaa',
// 		image: 'https://www.cocinacaserayfacil.net/wp-content/uploads/2020/03/Recetas-faciles-de-cocinar-y-sobrevivir-en-casa-al-coronavirus_2.jpg',
// 		diets: ['paleolithic', 'gluten free'],
// 		healthScore: 1,
// 	},
// 	{
// 		id: 'e3530f55-99a7-47c4-b259-25d0af6e002a',
// 		title: 'gfhfghfgh',
// 		image: 'jfgjfg.png',
// 		diets: [],
// 		healthScore: 1,
// 	},
// ];

// let filtered = arr.filter((a) => typeof a.id === 'number');
// console.log(filtered);

let arr = ['hola', 'sdfsd0', 'sdfsd'];

let aux = arr.join(',');
console.log(aux);
