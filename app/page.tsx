import Heading from "@/components/Heading";
import Link from "next/link";

export default function HomePage() {
  console.log("Home Page rendering")

  return (
    <>
      <Heading>Säter Triathlon</Heading>
      <p className="pb-3">test</p>
      <div className="bg-white border rounded shadow w-80 hover:shadow-xl">
        <Link href="/reviews/hollow-knight">
          <img src="/images/hollow-knight.jpg" alt="Hollow Knight" width={320} height={180} className="rounded-t mb-2"/>
          <h2 className="py-1 font-semibold font-orbitron text-center">Hollow Knight</h2>
        </Link>
      </div>
    </>
  );
}
