import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-gray-200">
      <nav className="container mx-auto h-20 flex items-center justify-between bg-white ">
        <Link to={"/"} className="font-semibold text-xl">Final Exam</Link>
        <ul className="flex gap-10">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/student-create"}>Create</NavLink>
          </li>
          <li>
            <NavLink to={"/saved"}>Saved</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default React.memo(Header);
