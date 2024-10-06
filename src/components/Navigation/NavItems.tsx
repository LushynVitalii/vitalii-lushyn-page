import React, { useEffect } from "react";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

const NavItems = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease",
      once: true,
    });
  }, []);

  return (
    <ul className="hidden lg:flex items-center gap-8 uppercase tracking-wider">
      <li data-aos="fade-down" data-aos-delay="150">
        <Link
          className="border-t-2 p-2 border-transparent hover:border-yellow-500 hover:cursor-pointer"
          smooth={true}
          to="home"
          onClick={() => {
            alert("jhvgh");
          }}
          // onClick={hideNav}
          offset={-110}
          href="#"
        >
          Home <span className="sr-only">(current)</span>
        </Link>
      </li>
      <li data-aos="fade-down" data-aos-delay="300">
        <Link
          className="border-t-2 p-2 border-transparent hover:border-yellow-500"
          smooth={true}
          to="about"
          // onClick={hideNav}
          offset={-75}
          href="#"
        >
          About me
        </Link>
      </li>
      <li data-aos="fade-down" data-aos-delay="450">
        <Link
          className="border-t-2 p-2 border-transparent hover:border-yellow-500"
          smooth={true}
          to="portfolio"
          // onClick={hideNav}
          offset={-75}
          href="#"
        >
          Portfolio
        </Link>
      </li>
      <li data-aos="fade-down" data-aos-delay="600">
        <Link
          className="border-t-2 p-2 border-transparent hover:border-yellow-500"
          smooth={true}
          to="experience"
          // onClick={hideNav}
          offset={-120}
          href="#"
        >
          Experience
        </Link>
      </li>

      <li data-aos="fade-down" data-aos-delay="750">
        <Link
          className="border-t-2 p-2 border-transparent hover:border-yellow-500"
          smooth={true}
          to="contacts"
          // onClick={hideNav}
          offset={-60}
          href="#"
        >
          Contacts
        </Link>
      </li>
    </ul>
  );
};

export default NavItems;
