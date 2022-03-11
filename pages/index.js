import { useEffect, useState } from "react";
import Seo from "../components/Seo";

export default function Home({ movies }) {
  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const { results } = await (await fetch("api/movie")).json();

  //     console.log(results);
  //     setMovies(results);
  //   })();
  // }, []);

  console.log(movies);

  return (
    <>
      <Seo title="Home - Next js" />
      <h1>Home</h1>
      <section>
        {movies.map((movie) => (
          <div className="movie_box" key={movie.id}>
            <img
              className="poster_img"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="poster image"
            />
            <h4>{movie.original_title}</h4>
          </div>
        ))}
      </section>
      <style jsx>{`
        section {
          display: grid;
          width: 100%;
          grid-template-columns: 1fr 1fr;
          grid-gap: 30px;
        }
        .movie_box {
        }
        .poster_img {
          width: 100%;
        }
        h4 {
          text-align: center;
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps() {
  const { results: movies } = await (
    await fetch("http://localhost:3000/api/movie")
  ).json();

  return {
    props: {
      movies,
    },
  };
}
