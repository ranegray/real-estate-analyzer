import Image from "next/image";

export default function NavBar() {
  return (
    <header className="w-full p-3 border-b-2 border-neutral-700 bg-neutral-900">
      <h1 className="text-3xl font-semibold flex items-center"><Image src={"/dark_logo.png"} alt="" width={24} height={24} className="mr-1.5 hover:animate-spin-slow" />hauscel</h1>
      <nav></nav>
    </header>
  );
}
