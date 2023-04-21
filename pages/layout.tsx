import NavBar from "@/lib/components/navbar";
import Footer from "@/lib/components/footer";
import MobileMenu from "@/lib/components/mobilemenu";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
