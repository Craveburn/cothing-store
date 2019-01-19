import Link from "next/link";

const Nav = () => (
  <div>
    <Link href="/sell">
      <a>SELL!</a>
    </Link>
    <Link href="/">
      <a>HOME!</a>
    </Link>
  </div>
);
export default Nav;
