import Image from './Image'

const SocialLink = ({ title, text, imgSrc, href }) => (
  <div className="mb-5 flex w-full cursor-pointer items-center rounded-md border border-primary-200 bg-primary-100 dark:bg-primary-900">
    <Image
      alt={title}
      src={imgSrc}
      width={75}
      height={75}
      className="p10"
      href={href}
    />
    <div className="float-left flex flex-grow justify-center">
      <p className="prose items-center dark:prose-dark">{text}</p>
    </div>
  </div>
)

export default SocialLink
