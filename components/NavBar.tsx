import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";

const NavBar = () => {
  const router = useRouter();

  const onGetClick = () => {
    axios.get("http://localhost:8000/api/getdata").then((res) => {
      console.log(res.data);
    });
  };

  const onPostClick = () => {
    axios({
      method: "post",
      url: "http://localhost:8000/api/postdata",
      data: {
        id: 100,
        name: "hundred",
      },
    }).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <>
      <nav>
        <span className={""}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
        <div>
          <Link href="/">
            <a className={router.pathname === "/" ? "active" : ""}>Home</a>
          </Link>
          <Link href="/about">
            <a className={router.pathname === "/about" ? "active" : ""}>
              About
            </a>
          </Link>
        </div>
        <button onClick={onGetClick}>get</button>
        <button onClick={onPostClick}>post</button>
      </nav>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </>
  );
};

export default NavBar;
