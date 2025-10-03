import { HeaderMenu } from "../header/HeaderMenu.jsx";
import { Logo } from "../ui/logo.jsx";
import { LogoSwicher } from "../ui/LogoSwicher.jsx";
import { useEffect, useState } from "react";


export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
            <div className="container">
                <div className="logo">
                    <Logo />
                    <LogoSwicher /> 
                </div>
                
                
                <nav>
                    <HeaderMenu />
                </nav>
            </div>
        </header>
    )
}
