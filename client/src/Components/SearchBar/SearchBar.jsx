import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './SearchBar.module.css';
import { NavLink } from 'react-router-dom';
import handleTypeRecipe from '../Helpers/handleTypeRecipe';
import handleFilter from '../Helpers/handleFilter';
import handleOrder from '../Helpers/handleOrder';
import handleReset from '../Helpers/handleReset';
import onSearch from './onSearch';

const SearchBar = () => {
	const dispacth = useDispatch();

	const diets = useSelector((state) => state.diets);
	const [name, setName] = useState('');

	const handleChange = (event) => {
		setName(event.target.value);
	};

	return (
		<div className={style.container}>
			<div className={style.containSearch}>
				<input
					type='search'
					placeholder='Buscar receta'
					onChange={handleChange}
					value={name}
					className={style.search}
				/>
				<button onClick={() => onSearch(name, setName, dispacth)} className={style.btnSearch}>
					Buscar
				</button>
			</div>
			<form className={style.containFilter}>
				<button type='reset' className={style.btnReset} onClick={() => handleReset(dispacth)}>
					Reset
				</button>
				<select onChange={(event) => handleTypeRecipe(event.target.value, dispacth)}>
					<option value='none'>None</option>
					<option value='all'>All Recipes</option>
					<option value='api'>Api Recipes</option>
					<option value='db'>My Recipes</option>
				</select>
				<select onChange={(event) => handleOrder(event.target.value, dispacth)}>
					<option value='none'>None</option>
					<option value='A-Z'>A-Z</option>
					<option value='Z-A'>Z-A</option>
					<option value='health'>Health Score</option>
				</select>
				<select onChange={(event) => handleFilter(event.target.value, dispacth)}>
					<option value='none'>None</option>
					{diets.map((elem, i) => {
						return (
							<option key={i} value={elem}>
								{elem}
							</option>
						);
					})}
				</select>
			</form>
			<div className={style.containRecipe}>
				<NavLink to={'/form'} className={style.recipe}>
					<button className={style.btnRecipe}>Create Recipe</button>
				</NavLink>
			</div>
		</div>
	);
};

export default SearchBar;
