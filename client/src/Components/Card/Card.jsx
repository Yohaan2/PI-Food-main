import style from './Card.module.css';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
	const { title, image, diets, id } = props;

	return (
		<NavLink to={`/detail/${id}`} className={style.container}>
			<div>
				<img className={style.img} src={image} alt={title} />
				<h3>{title}</h3>
				<div className={style.container_diets}>
					{diets.map((a, i) => {
						return (
							<h5 key={i} className={style.diets}>
								{a}
							</h5>
						);
					})}
				</div>
			</div>
		</NavLink>
	);
};

export default Card;
