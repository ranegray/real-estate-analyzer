import NavBar from "@/lib/components/navbar";
import Footer from "@/lib/components/footer";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
