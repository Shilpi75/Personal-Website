import Link from "@/components/Link"
import { PageSeo } from "@/components/SEO"
import Tag from "@/components/Tag"
import siteMetadata from "@/data/siteMetadata"
import { getAllFilesFrontMatter } from "@/lib/mdx"
import formatDate from "@/lib/utils/formatDate"
import Welcome from "@/components/Welcome"
import Subscribe from "@/components/Subscribe"
import Work from "@/components/Work"
import Clients from "@/components/Clients"
import { RoughNotation } from "react-rough-notation"

const MAX_DISPLAY = 3

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog")

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSeo
        title={siteMetadata.title}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="prose space-y-2 pt-6 pb-6 dark:prose-dark md:space-y-5">
          {/* <Welcome /> */}
          <Subscribe />
          {/* <Work />
          <Clients /> */}
          <h1 className="py-6 ">Latest</h1>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && "No posts found."}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-6">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    {/* <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-lg font-medium leading-7 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl> */}
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="font-serif text-3xl font-bold leading-7 tracking-normal">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 hover:text-primary-600 dark:text-gray-100 dark:hover:text-primary-400"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="text-lg font-medium leading-7"></div>
                          <div className="flex flex-wrap pt-3 font-small text-gray-500 dark:text-gray-400">
                            <time dateTime={date}>{formatDate(date)}</time>
                          </div>
                        </div>
                        <div className="prose max-w-none dark:prose-dark">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-7">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-700 hover:text-primary-900 dark:text-primary-400 hover:dark:text-primary-900"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-700 hover:text-primary-900 dark:text-primary-400 hover:dark:text-primary-900"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
