import Header from '../header/Header.jsx'
import Footer from '../footer/footer.jsx'

export default function Wrapper({ children }) {
    return (
        <div className={`flex flex-col min-h-svh`}>
            <Header />
            <main className={`flex-1`}>{children}</main>
            <Footer />
        </div>
    )
}