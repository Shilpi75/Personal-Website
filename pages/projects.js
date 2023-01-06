import siteMetadata from "@/data/siteMetadata"
import projectsData from "@/data/projectsData"
import Card from "@/components/Card"
import { PageSeo } from "@/components/SEO"

export default function Projects() {
  return (
    <>
      <PageSeo
        title={`Projects - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="divide-gray-3 divide-y">
        <div className="prose pt-6 pb-10 text-center dark:prose-dark ">
          <h1>Projects</h1>
          <p>List of projects I have been tinkering with</p>
        </div>

        <div className="flex w-auto flex-col py-6">
          {projectsData.map((d) => (
            <Card
              key={d.title}
              title={d.title}
              description={d.description}
              imgSrc={d.imgSrc}
              href={d.href}
            />
          ))}
        </div>
      </div>
    </>
  )
}
