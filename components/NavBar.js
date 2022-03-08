import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <>
      <nav>
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about">
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
      </nav>
      <style jsx>{`
        nav {
          display: flex;
          align-items: center;
          height: 60px;
          background-color: beige;
        }
        .active {
          color: red;
        }
      `}</style>
    </>
  );
}
