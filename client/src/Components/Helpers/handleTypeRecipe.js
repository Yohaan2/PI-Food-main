import { orderCards, filterCards, allRecipe, typeRecipe } from '../Redux/actions';

const handleTypeRecipe = (event, dispacth) => {
	dispacth(typeRecipe(event));
};
export default handleTypeRecipe;
