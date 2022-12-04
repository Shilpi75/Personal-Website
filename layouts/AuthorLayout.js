import Icon from "@/components/icons"
import Image from "@/components/Image"
import { PageSeo } from "@/components/SEO"

export default function AuthorLayout({ children, frontMatter }) {
  const {
    name,
    avatar,
    occupation,
    company,
    email,
    twitter,
    linkedin,
    github,
  } = frontMatter

  return (
    <>
      <PageSeo title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y">
        <div className="prose text-center dark:prose-dark">
          <h1 className="space-y-2 pt-6 pb-8 md:space-y-5">About</h1>
        </div>
        <div className="items-start space-y-2">
          <div className="sr-only flex flex-col items-center space-x-2 pt-8">
            <Image
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="h-48 w-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {name}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <Icon kind="mail" href={`mailto:${email}`} />
              <Icon kind="github" href={github} />
              <Icon kind="linkedin" href={linkedin} />
              <Icon kind="twitter" href={twitter} />
            </div>
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
