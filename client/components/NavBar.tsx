import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <Link href="/"
          className="text-blue-500 font-bold font-orbitron hover:text-blue-800">Säter Triathlon</Link>
        </li>
        <li className="ml-auto">
          <Link href="/reviews"
          className="text-blue-500 hover:text-blue-800">Anmälan</Link>
        </li>
        <li>
          <Link href="/"
          className="text-blue-500 hover:text-blue-800">Resultat</Link>
        </li>
        <li>
          <Link href="/"
          className="text-blue-500 hover:text-blue-800">Deltagare</Link>
        </li>
        <li>
          <Link href="/"
          className="text-blue-500 hover:text-blue-800">Publik</Link>
        </li>
        <li>
          <Link href="/"
          className="text-blue-500 hover:text-blue-800">Kontakt</Link>
        </li>
      </ul>
    </nav>
  )
}
