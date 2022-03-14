import NavBar from "./NavBar";

interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
}
