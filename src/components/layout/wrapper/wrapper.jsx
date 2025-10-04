import Footer from "../footer/footer";
import Header from "../header/header";


export default function Wrapper({ children }) {
  return (
    <div className={`flex flex-col min-h-svh`}>
      <Header />
      <main className={`flex-1`}>{children}</main>
      <Footer />
    </div>
  );
}
