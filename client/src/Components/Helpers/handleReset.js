import { reset } from '../Redux/actions';
import axios from 'axios';

const handleReset = async (dispacth) => {
	// const request = await axios.get('http://localhost:3001/allrecipe');
	// const { data } = request;
	dispacth(reset());
};

export default handleReset;
