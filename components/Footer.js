import Link from "./Link"
import siteMetadata from "@/data/siteMetadata"
import Icon from "@/components/icons"

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="prose mb-5 flex space-x-4 dark:prose-dark">
          <Icon kind="twitter" href={siteMetadata.twitter} />
          <Icon kind="linkedin" href={siteMetadata.linkedin} />
          <Icon kind="medium" href={siteMetadata.medium} />
          <Icon kind="github" href={siteMetadata.github} />
        </div>
        <div className="mb-2 flex space-x-2 text-lg text-gray-700 dark:text-gray-200">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <div>
            <p>Personal Website</p>
          </div>
        </div>
        <div className="mb-8 text-lg text-gray-700 dark:text-gray-200">
          <p>Made with Next.js, Tailwind and hosted on Vercel</p>
        </div>
      </div>
    </footer>
  )
}
