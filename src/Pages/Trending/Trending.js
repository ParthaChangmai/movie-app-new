import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Trending.css';
import { SingContent, CustomPagination } from '../../components';

const Trending = () => {
	const [page, setPage] = useState(1);
	const [content, setContent] = useState([]);
	const fetchTrending = async () => {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.React_App_Movie_key}&page=${page}`
		);

		setContent(data.results);
	};
	useEffect(() => {
		fetchTrending();
		//eslint-disable-next-line
	}, [page]);

	return (
		<div>
			<span className="pageTittle">Trending</span>
			<div className="trending">
				{content &&
					content.map((c) => (
						<SingContent
							key={c.id}
							id={c.id}
							poster={c.poster_path}
							title={c.title || c.name}
							date={c.first_air_date || c.release_date}
							media_type={c.media_type}
							vote_average={c.vote_average}
						/>
					))}
			</div>
			<CustomPagination setPage={setPage} />
		</div>
	);
};

export default Trending;
