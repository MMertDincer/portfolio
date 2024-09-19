"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "./ui/button";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <>
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* Logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Vols<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link href={link.path} key={index} className={`${link.path === pathname ? "text-accent border-b-2 border-accent" : "link-underline"} text-xl capitalize hover:text-accent transition-all`}>
                {link.name}
              </Link>
            );
          })}
        </nav>
        {/* nav footer */}
        {/* Logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Button className="button-glow">Hire Me!</Button>
        </div>
      </SheetContent>
    </Sheet>
    </>
  );
};

export default Nav;
