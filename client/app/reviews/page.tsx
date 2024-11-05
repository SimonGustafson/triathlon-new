import Link from "next/link";
import Heading from "../../components/Heading";
import { getReviews } from "@/lib/reviews";

export const metadata = {
  title: "Anmälan",
  description: "Anmälan till Säter Triathlon",
}



export default async function ReviewsPage() {
  const reviews = await getReviews();
  console.log("[ReviewsPage] reviews: ", reviews);
    return (
      <>
        <Heading>Reviews</Heading>
      <nav>
        <ul className="flex flex-col sm:flex-row flex-wrap gap-3">
          {reviews.map((review) => (
            <li key={review.slug} className="bg-white border rounded shadow w-80 hover:shadow-xl">
              <Link href={"/reviews/" + review.slug}>
                <img src={review.image} alt={review.title} width={320} height={180} className="rounded-t mb-2"/>
                <h2 className="py-1 font-semibold font-orbitron text-center">{review.title}</h2>
              </Link>
            </li>
            ))}
        </ul>
      </nav>
      </>
    );
  }
  