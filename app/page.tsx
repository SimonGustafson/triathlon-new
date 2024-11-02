import Heading from "@/components/Heading";
import { getFeaturedReview } from "@/lib/reviews";
import Link from "next/link";

export const metadata = {
  title: "Säter Triathlon",
}

export default async function HomePage() {
  const review = await getFeaturedReview();


  return (
    <>
      <Heading>Säter Triathlon</Heading>
      <p className="pb-3">test</p>
      <div className="bg-white border rounded shadow w-80 hover:shadow-xl">
        <Link href={`/reviews/${review.slug}`}>
          <img src={review.image} alt="Hollow Knight" width={320} height={180} className="rounded-t mb-2"/>
          <h2 className="py-1 font-semibold font-orbitron text-center">{review.title}</h2>
        </Link>
      </div>
    </>
  );
}
