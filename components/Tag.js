import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 mt-2 text-lg font-medium uppercase text-primary-700 hover:text-primary-900 dark:text-primary-400 hover:dark:text-primary-900">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
