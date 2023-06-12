import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { allDiets } from '../Redux/actions';
import style from './LandingPage.module.css';

const LandingPage = ({ home, loading }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		async function fetchDiets() {
			const request = await axios.get('http://localhost:3001/diets');
			const { data } = request;
			dispatch(allDiets(data));
		}
		fetchDiets();
	}, []);
	return (
		<>
			{loading ? (
				<div className={style.container}>
					<div className={style.cargando}>
						<div className={style.pelotas}></div>
						<div className={style.pelotas}></div>
						<div className={style.pelotas}></div>
						<span className={style.texto_cargando}>Loading...</span>
					</div>
				</div>
			) : (
				<div className={style.container}>
					<div className={style.head}>
						<h1 className={style.h1}>Henry Food</h1>
						<h1 className={style.h1}>Welcome</h1>
					</div>

					<button className={style.cta} onClick={home}>
						<span>Click me</span>
						<svg width='13px' height='10px' viewBox='0 0 13 10'>
							<path d='M1,5 L11,5'></path>
							<polyline points='8 1 12 5 8 9'></polyline>
						</svg>
					</button>
				</div>
			)}
		</>
	);
};

export default LandingPage;
