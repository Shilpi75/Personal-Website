import Link from "@/components/Link"
import PageTitle from "@/components/PageTitle"
import SectionContainer from "@/components/SectionContainer"
import { BlogSeo } from "@/components/SEO"
import siteMetadata from "@/data/siteMetadata"
import formatDate from "@/lib/utils/formatDate"

export default function PostLayout({
  frontMatter,
  authorDetails,
  next,
  prev,
  children,
}) {
  const { date, title } = frontMatter

  return (
    <SectionContainer>
      <BlogSeo
        url={`${siteMetadata.siteUrl}/blog/${frontMatter.slug}`}
        {...frontMatter}
      />
      <article>
        <div>
          <header>
            <div className="space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700">
              <dl>
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-lg font-medium leading-7 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>{formatDate(date)}</time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div
            className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0 "
            style={{ gridTemplateRows: "auto 1fr" }}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">
                {children}
              </div>
            </div>
            <footer>
              <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                {prev && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/blog/${prev.slug}`}
                      className="text-primary-700 hover:text-primary-900 dark:text-primary-400 hover:dark:text-primary-900"
                    >
                      &larr; {prev.title}
                    </Link>
                  </div>
                )}
                {next && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/blog/${next.slug}`}
                      className="text-primary-700 hover:text-primary-900 dark:text-primary-400 hover:dark:text-primary-900"
                    >
                      {next.title} &rarr;
                    </Link>
                  </div>
                )}
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
