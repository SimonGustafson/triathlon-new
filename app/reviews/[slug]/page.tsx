import Heading from "../../../components/Heading";
import { getReview, getSlugs } from '@/lib/reviews';

interface ReviewPageParams {
  slug: string;
}

interface ReviewPageProps {
  params: ReviewPageParams;
}

export async function generateStaticParams(): Promise<ReviewPageParams[]> {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }) {
  const review = await getReview(slug);
  return {
    title: review.title
  }
}

export default async function ReviewPage({ params: { slug } }: ReviewPageProps) {
  const review = await getReview(slug);
  console.log("[ReviewPage] rendering", slug);
    return (
      <>
        <Heading>{review.title}</Heading>
        <p className="italic pb-2">{review.date}</p>
        <img src={review.image} alt="Stardev Valley" width={640} height={360} className="rounded mb-2"/>
        <article dangerouslySetInnerHTML={{ __html: review.body }} className="prose prose-slate max-w-screen-sm" />
      </>
    );
  }
  