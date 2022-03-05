import axios from "axios";
import React, { useEffect, useState } from "react";
import Genres from "../../components/Genres";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingContent from "../../components/SingleContent/SingContent";
import useGenres from "../../hooks/useGenre";

const Movies = () => {
	const [page, setPage] = useState(1);
	const [content, setContent] = useState([]);
	const [numofPages, setNumofPages] = useState();
	const [selectedGenres, setSelectedGenres] = useState([]);
	const [genres, setGenres] = useState([]);
	const genresURL = useGenres(selectedGenres);

	const fetchMovies = async () => {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.React_App_Movie_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genresURL}`
		);

		setContent(data.results);
		setNumofPages(data.total_pages);
	};

	useEffect(() => {
		fetchMovies();
	}, [page, genresURL]);

	return (
		<div>
			<span className="pageTittle">Movies</span>
			<Genres
				type="movie"
				selectedGenres={selectedGenres}
				setSelectedGenres={setSelectedGenres}
				genres={genres}
				setGenres={setGenres}
				setPage={setPage}
			/>
			<div className="trending">
				{content &&
					content.map((c) => (
						<SingContent
							key={c.id}
							id={c.id}
							poster={c.poster_path}
							title={c.title || c.name}
							date={c.first_air_date || c.release_date}
							media_type="movie"
							vote_average={c.vote_average}
						/>
					))}
			</div>
			{numofPages >> 1 && (
				<CustomPagination setPage={setPage} numofPages={numofPages} />
			)}
		</div>
	);
};

export default Movies;
