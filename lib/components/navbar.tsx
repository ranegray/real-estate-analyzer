import Link from "next/link";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/outline";
import MobileMenu from "./mobilemenu";
import { useState } from "react";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <MobileMenu showMenu={showMenu} toggleMenu={toggleMenu} />
      <header className="w-full border-b-2 border-neutral-700 bg-neutral-900 p-3">
        <div className="flex items-center justify-between sm:m-auto sm:w-[640px]">
          <Link href={"/"}>
            <h1 className="flex items-center text-3xl font-semibold">
              <Image
                src={"/dark_logo.png"}
                alt=""
                width={24}
                height={24}
                className="mr-1.5 hover:animate-spin-slow"
              />
              hauscel
            </h1>
          </Link>
          <nav>
            <button onClick={toggleMenu}>
              <Bars3Icon className="h-8 w-8 stroke-2 text-neutral-700" />
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}
