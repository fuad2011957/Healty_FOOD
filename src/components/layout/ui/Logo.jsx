import LogoImg from "../shared/assets/svg/logo.svg";

export function Logo() {
  return (
    <a href="/">
      <img src={LogoImg} alt="logo" />
    </a>
  );
}
