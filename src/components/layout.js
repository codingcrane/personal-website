import * as React from "react";
import { Link } from "gatsby";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="font-sans m-auto max-w-screen-sm">
      <nav>
        <ul className="flex list-none pl-0">
          <li className="pr-8">
            <Link to="/" className="text-black">
              Home
            </Link>
          </li>
          <li className="pr-8">
            <Link to="/about" className="text-black">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className="text-purple-500 text-4xl font-bold">{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
