import Link from "@/components/Link"
import PageTitle from "@/components/PageTitle"
import SectionContainer from "@/components/SectionContainer"
import { BlogSeo } from "@/components/SEO"
import Tag from "@/components/Tag"
import siteMetadata from "@/data/siteMetadata"
import Subscribe from "@/components/Subscribe"
import formatDate from "@/lib/utils/formatDate"

const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/blog/${slug}`
  )}`

const postDateTemplate = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
}

export default function PostLayout({
  frontMatter,
  authorDetails,
  next,
  prev,
  children,
}) {
  const { slug, date, title, tags } = frontMatter

  return (
    <SectionContainer>
      <BlogSeo
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <article>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <header className="py-6">
            <div className="space-y-1 text-center">
              {/* <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-lg text-gray-600 dark:text-gray-300">
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(
                        siteMetadata.locale,
                        postDateTemplate
                      )}
                    </time>
                  </dd>
                </div>
              </dl> */}
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
              <div className="flex pt-3 font-small text-gray-500 dark:text-gray-400 justify-center">
                <time dateTime={date}>{formatDate(date)}</time>
              </div>
              {/* {tags && (
                <div className="tflex flex-wrap">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              )} */}
            </div>
          </header>

          <div className="prose max-w-none py-5 dark:prose-dark">
            {children}
            <div className="text-center">
              <Link href={discussUrl(slug)} rel="nofollow">
                {"Discuss on Twitter 🐦"}
              </Link>
            </div>
            <Subscribe />
          </div>

          <footer>
            {/* This is an author badge */}

            {/* <dl className="py-5">
              <dt className="sr-only">Authors</dt>
              <dd>
                <ul>
                  {authorDetails.map((author) => (
                    <li className="flex items-center justify-center " key={author.name}>
                      {author.avatar && (
                        <Image
                          src={author.avatar}
                          width="40px"
                          height="40px"
                          alt="avatar"
                          className="w-10 h-10 rounded-full"
                        />
                      )}
                      <dl className="pl-2 whitespace-nowrap">
                        <dt className="sr-only">Name</dt>
                        <dd className="text-gray-900 dark:text-gray-100">{author.name}</dd>
                        <dt className="sr-only">Twitter</dt>
                        <dd>
                          {author.twitter && (
                            <Link
                              href={author.twitter}
                              className="text-primary-700 hover:text-primary-900 dark:text-primary-400 hover:dark:text-primary-900"
                            >
                              {author.twitter.replace('https://twitter.com/', '@')}
                            </Link>
                          )}
                        </dd>
                      </dl>
                    </li>
                  ))}
                </ul>
              </dd>
            </dl> */}

            {(next || prev) && (
              <div className="prose flex justify-between pt-5 dark:prose-dark">
                {prev && (
                  <div>
                    <h6>Previous post</h6>
                    <div className="text-primary-700 hover:text-primary-900 dark:text-primary-400 hover:dark:text-primary-900">
                      <Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
                    </div>
                  </div>
                )}
                {next && (
                  <div>
                    <h6>Next post</h6>
                    <div className="text-lg text-primary-700 hover:text-primary-900 dark:text-primary-400 hover:dark:text-primary-900">
                      <Link href={`/blog/${next.slug}`}>{next.title}</Link>
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="pt-4 xl:pt-8"></div>
          </footer>
        </div>
      </article>
    </SectionContainer>
  )
}
