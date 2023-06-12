import axios from 'axios';
import { searchId } from '../Redux/actions';

const onSearch = async (name, setName, dispatch) => {
	if (name) {
		const request = await axios.get(`http://localhost:3001/recipe/name?name=${name}`);
		const { data } = request;
		dispatch(searchId(data));
		setName('');
	} else {
		alert('Debes colocar algun texto');
	}
};

export default onSearch;
