import { filterCards } from '../Redux/actions';

const handleFilter = (event, dispacth) => {
	dispacth(filterCards(event));
};

export default handleFilter;
