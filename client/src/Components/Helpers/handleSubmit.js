import { postCero, postRecipe } from '../Redux/actions';

const handleSubmit = (event, setErrors, dispatch, setRecipe, errors, recipe) => {
	event.preventDefault();
	event.target.reset();
	setErrors({ ...errors, boton: true });
	dispatch(postRecipe(recipe));
	setRecipe({
		title: '',
		summary: '',
		healthScore: 0,
		steps: '',
		image: '',
		diets: [],
	});
	dispatch(postCero());
};

export default handleSubmit;
