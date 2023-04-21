import Link from "next/link";

export default function MobileMenu({ showMenu, toggleMenu }) {
  return (
    <div className={`absolute z-10 pt-16 w-full h-screen ${showMenu ? "" : "hidden"}`} onClick={toggleMenu}>
      <div className="flex flex-col border-b border-b-neutral-700 bg-black px-3 py-2 text-neutral-500">
        <Link href={"/dashboard"} className="border-b border-neutral-700 pb-2">
          Dashboard
        </Link>
        <Link href={"/add"} className="py-2">Add Property</Link>
        <Link href={"/"} className="border-t pt-2 border-neutral-700">
          Help
        </Link>
      </div>
    </div>
  );
}
