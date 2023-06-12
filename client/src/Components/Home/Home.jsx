import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import SearchBar from '../SearchBar/SearchBar';
import style from './Home.module.css';
import { useSelector } from 'react-redux';
import Pagination from '../Pagination/Pagination';

const Home = ({ onSearch }) => {
	const [productsPerPage, setProductsPerPage] = useState(9);
	const [currentPage, setCurrentPage] = useState(1);

	const recipe = useSelector((state) => state.allRecipe);

	const totalRecipe = recipe.length;
	const end = currentPage * productsPerPage;
	const start = end - productsPerPage;

	return (
		<>
			<SearchBar onSearch={onSearch} />
			<h1 className={style.h1}>Home</h1>

			<div className={style.container}>
				{recipe?.error ? (
					<h1 className={style.notFound}>Not Found</h1>
				) : (
					recipe
						?.map((a) => {
							return (
								<Card
									key={a?.id}
									id={a?.id}
									title={a?.title}
									image={a?.image}
									diets={a?.diets}
								/>
							);
						})
						.slice(start, end)
				)}
			</div>
			<Pagination
				totalRecipe={totalRecipe}
				productsPerPage={productsPerPage}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
		</>
	);
};

export default Home;
