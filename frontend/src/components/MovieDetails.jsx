import '../css/MovieCard.css';
import { useMovieContext } from '../context/MovieContext';

function MovieDetails({ movie }) {
  const { isFavorite, addToFavorites, removeFavorite } = useMovieContext();
  const favorite = isFavorite(movie.id);

  function onFavorite(e) {
    e.preventDefault();
    if (favorite) removeFavorite(movie.id);
    else addToFavorites(movie);
  }

  return (
    <div className="movie-card details">
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        <div className="movie-overlay">
          <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavorite}>
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p><strong>Release Year:</strong> {movie.release_date?.split("-")[0]}</p>
        <p><strong>Genre:</strong> {movie.genres?.map(g => g.name).join(", ")}</p>
        <p><strong>Rating:</strong> {movie.vote_average}</p>
        <p className="movie-description">{movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieDetails;