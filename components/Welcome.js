import siteMetadata from "@/data/siteMetadata"
import Icon from "@/components/icons"
import Image from "next/image"

export default function Welcome() {
  return (
    <div className="mb-10 items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
      <div className="flex flex-col items-center space-x-2 pt-8">
        <Image
          src={siteMetadata.image}
          alt="avatar"
          height={250}
          width={250}
          className="rounded-full"
        />
        <div className="hover:text-primary-600 dark:hover:text-primary-400 flex space-x-3 pt-6">
          <Icon kind="twitter" href={siteMetadata.twitter} />
          <Icon kind="linkedin" href={siteMetadata.linkedin} />
          <Icon kind="github" href={siteMetadata.github} />
        </div>
      </div>
      <div className="prose dark:prose-dark pt-8 pb-8 xl:col-span-2">
        <h2>Hey, I am Kirill</h2>
        <p>
          I am a PM and indie-maker based in Singapore. Love to tinker with side
          projects whilst self-teaching software development and design.
          Occasionally, I write essays on calm life, exploration, experiments
          and making sense of the world. My{" "}
          <a href="https://twitter.com/kirso_"> DMs</a> are always open.
        </p>
      </div>
    </div>
  )
}
