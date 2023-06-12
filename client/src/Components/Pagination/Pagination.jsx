import style from './Pagination.module.css';

const Pagination = ({ productsPerPage, currentPage, setCurrentPage, totalRecipe }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalRecipe / productsPerPage); i++) {
		pageNumbers.push(i);
	}

	const onPreviusPage = () => {
		setCurrentPage(currentPage - 1);
	};
	const onNextPage = () => {
		setCurrentPage(currentPage + 1);
	};
	const onSpecificPage = (n) => {
		setCurrentPage(n);
	};

	return (
		<>
			<div className={style.container}>
				<button
					className={style.previus}
					onClick={onPreviusPage}
					disabled={currentPage === 1 ? true : ''}>
					Previus
				</button>
				<div className={style.number}>
					{pageNumbers?.map((noPage) => (
						<button
							key={noPage}
							className={`${style.center} ${noPage === currentPage ? style.isCurrent : ''}`}
							onClick={() => onSpecificPage(noPage)}>
							{noPage}
						</button>
					))}
				</div>
				<button
					className={style.next}
					onClick={onNextPage}
					disabled={currentPage >= pageNumbers.length ? true : ''}>
					Next
				</button>
			</div>
		</>
	);
};

export default Pagination;
