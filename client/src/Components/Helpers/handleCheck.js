const handleCheck = (event, setRecipe, recipe) => {
	let arr = [];
	if (event.target.checked === true) {
		arr.push(event.target.value);
		setRecipe({
			...recipe,
			diets: recipe.diets.concat(arr),
		});
	} else {
		setRecipe({
			...recipe,
			diets: recipe.diets.filter((e) => e !== event.target.value),
		});
	}
};

export default handleCheck;
