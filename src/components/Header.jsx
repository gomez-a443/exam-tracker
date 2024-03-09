import { Navbar } from "flowbite-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <Navbar className="border-b-2">
      <Link to="/" className="self-center text-sm sm:text-xl font-semibold">
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          TigmaMinds
        </span>
      </Link>
    </Navbar>
  );
}
