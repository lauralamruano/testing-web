import Link from "next/link";
import React from "react";

const NavBar: React.FC = () => {
  return (
    <div className="navbar bg-green-100">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl" href="https://lauralamruano.github.io/">LL</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/pattern">Patterns</Link></li>
          <li><Link href="/check-points">Check List</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn" href="#">Button</a>
      </div>
    </div>
  );
};

export default NavBar;