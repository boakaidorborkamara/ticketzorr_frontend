"use client";
import { Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button-component";

// navbar item type
type navbarType = {
  name: string;
  url: string;
};

//navbat item list
const navbarListitem: navbarType[] = [
  {
    name: "Discover Events",
    url: "/discover_events",
  },
  {
    name: "Organisers",
    url: "/organisers",
  },
  {
    name: "Spaces",
    url: "/spaces",
  },
  {
    name: "Pricing",
    url: "/pricing",
  },
];

//navbar component
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full sticky top-0 bg-white z-50 shadow-md">
      <div className="container-responsive flex justify-between items-center py-3 sm:py-4">
        <Link href={"/"} className="flex-shrink-0">
          <Image
            width={100}
            height={100}
            className="w-20 h-auto sm:w-24 lg:w-28"
            src="/Logo.png"
            alt="Ticketzorr logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-x-6 xl:gap-x-8">
          <ul className="flex gap-x-6 xl:gap-x-8 font-semibold text-sm xl:text-base">
            {navbarListitem.map((item, i) => (
              <li
                key={i}
                className="hover:text-slate-600 transition-colors duration-200 text-black"
              >
                <Link href={item.url} className="whitespace-nowrap">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex gap-x-3 xl:gap-x-4 items-center font-bold">
            <button className="touch-target hover:text-slate-600 transition-colors duration-200">
              <Search size={20} />
            </button>
            <Link href={"/create_event"}>
              <Button name="Create Event" className="btn-responsive" />
            </Link>
            <Link href={"/auth/login"}>
              <Button
                name="Sign in"
                variant="primary"
                className="btn-responsive"
              />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="touch-target">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg border-t">
          <div className="container-responsive py-4">
            <ul className="flex flex-col gap-y-4 font-semibold text-base mb-6">
              {navbarListitem.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.url}
                    onClick={toggleMenu}
                    className="block py-2 hover:text-slate-600 transition-colors duration-200 touch-target"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-y-3 pt-4 border-t">
              <button className="flex items-center gap-2 py-2 font-semibold hover:text-slate-600 transition-colors duration-200">
                <Search size={20} />
                Search Events
              </button>
              <Link href={"/create_event"} onClick={toggleMenu}>
                <Button name="Create Event" className="w-full btn-responsive" />
              </Link>
              <Link href={"/auth/login"} onClick={toggleMenu}>
                <Button
                  name="Sign in"
                  variant="primary"
                  className="w-full btn-responsive"
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
