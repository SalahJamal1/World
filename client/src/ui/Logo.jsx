import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img src="/public/logo.png" alt="logo" className="h-12" />
    </Link>
  );
}

export default Logo;
