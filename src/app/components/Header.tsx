import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col items-center w-full py-4 bg-white shadow-md">
      <h1 className="text-4xl font-bold text-center mt-2">
        <span className="text-blue-600">&lt;/</span>
        <span className="text-green-600">digital</span>
        <span className="text-blue-600">Campus&gt;</span>
      </h1>
    </header>
  );
}
