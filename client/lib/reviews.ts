import { readdir, readFile } from 'node:fs/promises';
import matter from 'gray-matter';
import { marked } from 'marked';
import qs from 'qs';

const CMS_URL = 'http://localhost:1337';

export interface Review {
  slug: string;
  title: string;
  date: string;
  image: string;
  body: string;
}

interface CmsItem {
  id: number;
  attributes: any;
}

export async function getFeaturedReview() {
  const reviews = await getReviews();
  return reviews[0];
}

export async function getReview(slug: string): Promise<Review> {
  const { data } = await fetchReviews({
    filters: {slug: { $eq: slug }},
    fields: ['slug', 'title', 'subtitle', 'publishedAt', "body"],
    populate: { image: { fields: ['url'] } },
    pagination: { pageSize: 1, withCount: false },
  });
  const  item = data[0];
  return {
    ...toReview(item),
    body: await marked(item.attributes.body),
  }
}

export async function getReviews(): Promise<Review[]> {
  const { data } = await fetchReviews({
    fields: ['slug', 'title', 'subtitle', 'publishedAt'],
    populate: { image: { fields: ['url'] } },
    sort: ['publishedAt:desc'],
    pagination: { pageSize: 6 },
  })
  return data.map(toReview);
}

export async function getSlugs(): Promise<string[]> {
  const { data } = await fetchReviews({
    fields: ['slug'],
    sort: ['publishedAt:desc'],
    pagination: { pageSize: 100 },
  });
  return data.map((item: CmsItem) => item.attributes.slug);
}

async function fetchReviews(params: any) {
  const url = `${CMS_URL}/api/reviews?`
    + qs.stringify( params, { encodeValuesOnly: true });
  console.log('fetchReviews:', url);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`CMS returned ${response.status} for ${url}`);
  }
  return await response.json();
}

function toReview(item) {
  const { attributes } = item
  return{
    slug: attributes.slug,
    title: attributes.title,
    date: attributes.publishedAt.slice(0, "yyyy-mm-dd".length),
    image: CMS_URL + attributes.image.data.attributes.url,
  }
}