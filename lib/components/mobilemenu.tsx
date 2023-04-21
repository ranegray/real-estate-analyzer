import Link from "next/link";

export default function MobileMenu({ showMenu }) {
  return (
    <div className={`absolute z-10 w-full ${showMenu ? "" : "hidden"}`}>
      <div className="flex h-screen overflow-hidden flex-col border-b border-b-neutral-700 bg-black px-3 py-2 text-neutral-500">
        <Link href={"/dashboard"} className="border-b border-neutral-700 pb-2">
          Dashboard
        </Link>
        <Link href={"/add"} className="py-2">Add Property</Link>
        <Link href={"/"} className="border-y py-2 border-neutral-700">
          Help
        </Link>
      </div>
    </div>
  );
}
