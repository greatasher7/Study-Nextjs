import { useRouter } from "next/router";
import Seo from "../components/Seo";

export default function Home({ movies }) {
  const router = useRouter();

  const onClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  };

  console.log(movies);

  return (
    <>
      <Seo title="Home - Next js" />
      <h1>Home</h1>
      <section>
        {movies.map((movie) => (
          <div
            className="movie_box"
            key={movie.id}
            onClick={() => {
              onClick(movie.id, movie.title);
            }}
          >
            <img
              className="poster_img"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
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
          cursor: pointer;
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

// 서버에서 해당 함수를 실행 후, 최초 html에 넣어서 보내줌 (React 전)
// 백엔드 서버에서 처리
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
