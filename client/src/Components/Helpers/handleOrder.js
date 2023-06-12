import { orderCards } from '../Redux/actions';

const handleOrder = (event, dispacth) => {
	dispacth(orderCards(event));
};

export default handleOrder;
