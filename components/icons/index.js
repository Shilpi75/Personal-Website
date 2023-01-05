import Mail from "./mail.svg"
import Github from "./github.svg"
import Facebook from "./facebook.svg"
import Youtube from "./youtube.svg"
import Linkedin from "./linkedin.svg"
import Twitter from "./twitter.svg"
import Medium from "./medium.svg"

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  medium: Medium,
}

const SocialIcon = ({ kind, href, size = 8 }) => {
  if (!href) return null

  const SocialSvg = components[kind]

  return (
    <a
      className=" text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-gray-700 hover:text-primary-900  dark:text-gray-200 hover:dark:text-primary-900 h-${size} w-${size}`}
      />
    </a>
  )
}

export default SocialIcon
