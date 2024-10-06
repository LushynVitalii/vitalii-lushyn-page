import React, { useState } from "react";
import logo from "/images/logo.png";
import { Link } from "react-scroll";
import { Bars4Icon } from "@heroicons/react/24/solid";
import NavItems from "./NavItems";

const Navigation = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleMenuClick = () => {
    console.log("Open menu!");
  };

  return (
    <nav className="flex w-full min-h-20 bg-gray-700 text-white items-center justify-center px-2">
      <div className="flex w-full max-w-7xl items-center justify-between p-4">
        <Link smooth={true} to="home" className="flex shrink-0 w-40" href="#">
          <img className="w-40 h-16 rounded" src={logo} alt="" />
        </Link>

        <button onClick={handleMenuClick}>
          <Bars4Icon className=" lg:hidden size-10 text-white" />
        </button>
        <NavItems />
      </div>
    </nav>
  );
};

export default Navigation;
