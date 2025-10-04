import { Help } from "../ui/Help.jsx";
import { Logo } from "../ui/Logo.jsx";
import { LogoSwicher } from "../ui/LogoSwicher.jsx";

function Footer() {
  return (
    <div>
      <footer>
        <Help />
        <div className="flex flex-col gap-3 foo">
          <div className="logo">
            <Logo />
            <LogoSwicher />
          </div>
          <p className="text-center">
            © Designed by Yellow Snow. All Rights Reserved.{" "}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
