import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function Wrapper({ children }) {
  return (
    <div className={`flex flex-col min-h-svh`}>
      <Header />
      <main className={`flex-1`}>{children}</main>
      <Footer />
    </div>
  );
}
