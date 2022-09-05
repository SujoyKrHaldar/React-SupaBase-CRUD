import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <section className="container py-10">{children}</section>
    </>
  );
}

export default Layout;
