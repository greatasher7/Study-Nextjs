import Seo from "../components/Seo";
import { useRouter } from "next/router";
import { IMovie } from "../type/interface";
import { GetServerSideProps } from "next";
import axios from "axios";

interface IHomeProps {
  movies: IMovie[];
}

const Home = ({ movies }: IHomeProps) => {
  const router = useRouter();

  const onClick = (id: number, title: string) => {
    router.push(`/movies/${title}/${id}`);
  };

  console.log(movies);
  return (
    <>
      <Seo title="Home - Next js" />
      <h1>Home</h1>

      <section>
        {movies.map((movie: IMovie) => (
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
            <h4>{movie.title}</h4>
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
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const {
    data: { results: movies },
  } = await axios({
    method: "get",
    url: "http://localhost:3000/api/movie",
  });

  return {
    props: {
      movies,
    },
  };
};
