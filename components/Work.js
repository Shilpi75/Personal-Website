import { RoughNotation } from 'react-rough-notation'

export default function Work() {
  return (
    <>
      <div className="py-6">
        <div>
          <h1 className="pb-4 text-center">
            <RoughNotation
              animate="true"
              animationDelay="1000"
              animationDuration="4000"
              type="box"
              color="#5DE4c7"
              show={true}
              strokeWidth="3"
            >
              Things I do
            </RoughNotation>
          </h1>
        </div>
        <div className="margin:0 grid gap-10 text-center md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="mb-0">Discovery</h2>
            <p>Continuous customer feedback and user research practices</p>
          </div>
          <div>
            <h2>Experimentation</h2>
            <p>
              Design and orchestration of experiments to conduct hypothesis
              testing
            </p>
          </div>
          <div>
            <h2>Growth</h2>
            <p>
              Iterative and data-driven approach to acquisition, retention and
              revenue.
            </p>
          </div>
          <div>
            <h2>Product</h2>
            <p>
              Working with engineering teams on solutioning and delivery of
              products
            </p>
          </div>
          <div>
            <h2>Automation</h2>
            <p>
              Workflows & automation of tedious tasks with APIs, scripts and
              no-code tools
            </p>
          </div>
          <div>
            <h2>MVP</h2>
            <p>Building lean and rapid prototypes to validate ideas </p>
          </div>
        </div>
      </div>
    </>
  )
}
