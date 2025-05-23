import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="z-[999]">
      <img
        src="/logo.png"
        alt="logo"
        className="lg:h-12 md:h-12 sm:h-12 xs:h-6"
      />
    </Link>
  );
}

export default Logo;
