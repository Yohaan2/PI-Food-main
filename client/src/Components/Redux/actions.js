import axios from 'axios';

export const types = {
	ORDER: 'ORDER',
	FILTER: 'FILTER',
	ALL_RECIPE: 'ALL_RECIPE',
	POST: 'POST',
	RESET: 'RESET',
	SEARCH: 'SEARCH',
	DIETS: 'DIETS',
	CERO: 'CERO',
	ERROR: 'ERROR',
	TYPE_RECIPE: 'TYPE_RECIPE',
};

export const allRecipe = (data) => {
	return {
		type: types.ALL_RECIPE,
		payload: data,
	};
};

export const orderCards = (orden) => {
	return {
		type: types.ORDER,
		payload: orden,
	};
};

export const filterCards = (diet) => {
	return {
		type: types.FILTER,
		payload: diet,
	};
};

export const postRecipe = (recipe) => {
	return async (dispatch) => {
		try {
			const request = await axios.post('http://localhost:3001/recipe', recipe);
			const { data } = request;
			return dispatch({
				type: types.POST,
				payload: data,
			});
		} catch (error) {
			if (error.response.data.error) {
				dispatch(errors(error.response.data));
			}
			return { error: error.message };
		}
	};
};

export const allDiets = (data) => {
	return {
		type: types.DIETS,
		payload: data,
	};
};

export const searchId = (data) => {
	return {
		type: types.SEARCH,
		payload: data,
	};
};

export const postCero = () => {
	return {
		type: types.CERO,
	};
};

export const errors = (error) => {
	return {
		type: types.ERROR,
		payload: error,
	};
};

export const typeRecipe = (data) => {
	return {
		type: types.TYPE_RECIPE,
		payload: data,
	};
};

export const reset = () => {
	return {
		type: types.RESET,
	};
};
