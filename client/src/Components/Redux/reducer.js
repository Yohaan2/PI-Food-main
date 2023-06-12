import { types } from './actions';

const initialState = {
	recipe: [],
	allRecipe: [],
	recipeDB: [],
	reset: [],
	all: [],
	post: {},
	error: {},
	diets: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.ALL_RECIPE:
			return {
				...state,
				allRecipe: action.payload,
				recipe: action.payload,
				recipeDB: action.payload,
				all: action.payload,
				reset: action.payload,
			};
		case types.TYPE_RECIPE:
			let copyType = [...state.recipeDB];
			let copyTypeDB = [...state.recipeDB];
			const filterDB = copyTypeDB.filter((a) => typeof a.id !== 'number');
			const filterApi = copyType.filter((a) => typeof a.id === 'number');
			return {
				...state,
				allRecipe:
					action.payload === 'db'
						? filterDB
						: action.payload === 'api'
						? filterApi
						: state.all,
				recipe:
					action.payload === 'db'
						? filterDB
						: action.payload === 'api'
						? filterApi
						: state.recipe,
			};

		case types.ORDER:
			const copy = [...state.allRecipe];
			return {
				...state,
				allRecipe:
					action.payload === 'A-Z'
						? copy.sort(function (a, b) {
								if (a.title > b.title) {
									return 1;
								}
								if (a.title < b.title) {
									return -1;
								}

								return 0;
						  })
						: action.payload === 'Z-A'
						? copy.sort(function (a, b) {
								if (a.title < b.title) {
									return 1;
								}
								if (a.title > b.title) {
									return -1;
								}

								return 0;
						  })
						: copy.sort((a, b) => b.healthScore - a.healthScore),
			};
		case types.FILTER:
			const copyFilter = [...state.recipe];
			return {
				...state,
				allRecipe: copyFilter.filter((recipes) => recipes.diets.includes(action.payload)),
			};

		case types.POST:
			return {
				...state,
				post: action.payload,
			};
		case types.ERROR:
			return {
				...state,
				error: action.payload,
			};
		case types.SEARCH:
			return {
				...state,
				allRecipe: action.payload,
			};
		case types.DIETS:
			return {
				...state,
				diets: action.payload,
			};
		case types.CERO:
			return {
				...state,
				error: {},
				post: {},
			};
		case types.RESET:
			return {
				...state,
				allRecipe: state.reset,
			};
		default:
			return {
				...state,
			};
	}
};

export default reducer;
