import Link from "./Link"
import Image from "next/image"

const Card = ({ title, description, imgSrc, href }) => (
  <div className="mt-1 mb-1 flex flex-auto place-items-center rounded-md border border-gray-300 hover:border-dotted dark:border-gray-600 hover:dark:border-primary-400">
    <div className="flex flex-row p-6">
      <Link
        href={href}
        aria-label={`Link to ${title}`}
        className="rounded-md border border-gray-300 dark:border-gray-600"
      >
        <Image
          alt={title}
          src={imgSrc}
          layout="fixed"
          width={250}
          height={150}
        />
      </Link>
    </div>
    <div className="">
      <h2 className="mb-3 font-serif text-3xl font-bold hover:text-primary-600 hover:dark:text-primary-400 ">
        <Link href={href} aria-label={`Link to ${title}`}>
          {title}
        </Link>
      </h2>
      <p className="prose mb-3 max-w-none dark:prose-dark">{description}</p>
      <Link
        href={href}
        className="text-lg font-medium leading-6 text-primary-700 hover:text-primary-900 dark:text-primary-400 hover:dark:text-primary-900"
        aria-label={`Link to ${title}`}
      >
        Learn more &rarr;
      </Link>
    </div>
  </div>
)

export default Card

// /* CARD START */
// const newCard = ({ title, description, imgSrc, href }) => (
//   <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
//     <div className="container">
//       <div className="flex flex-wrap -mx-4">
//         <div className="w-full md:w-1/2 xl:w-1/3 px-4">
//           <div className="bg-white rounded-lg overflow-hidden mb-10">
//             <Link href={href} aria-label={`Link to ${title}`}>
//               <Image
//                 alt={title}
//                 src={imgSrc}
//                 className="object-cover object-center lg:h-48 md:h-36"
//                 width={544}
//                 height={306}
//                 objectFit="contain"
//                 className="w-full"
//               />
//             </Link>
//             <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
//               <h3>
//                 <a
//                   href="javascript:void(0)"
//                   className="
//                         font-semibold
//                         text-dark text-xl
//                         sm:text-[22px]
//                         md:text-xl
//                         lg:text-[22px]
//                         xl:text-xl
//                         2xl:text-[22px]
//                         mb-4
//                         block
//                         hover:text-primary
//                         "

//                   50+ Best creative website themes & templates
//                 </a>
//               </h3>
//               <p className="text-base text-body-color leading-relaxed mb-7">
//                 Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur
//                 adipiscing elit.
//               </p>
//               <a
//                 href="javascript:void(0)"
//                 className="
//                      inline-block
//                      py-2
//                      px-7
//                      border border-[#E5E7EB]
//                      rounded-full
//                      text-base text-body-color
//                      font-medium
//                      hover:border-primary hover:bg-primary hover:text-white
//                      transition
//                      "
//               >
//                 View Details
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="w-full md:w-1/2 xl:w-1/3 px-4">
//           <div className="bg-white rounded-lg overflow-hidden mb-10">
//             <img
//               src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-02.jpg"
//               alt="image"
//               className="w-full"
//             />
//             <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
//               <h3>
//                 <a
//                   href="javascript:void(0)"
//                   className="
//                         font-semibold
//                         text-dark text-xl
//                         sm:text-[22px]
//                         md:text-xl
//                         lg:text-[22px]
//                         xl:text-xl
//                         2xl:text-[22px]
//                         mb-4
//                         block
//                         hover:text-primary
//                         "
//                 >
//                   The ultimate UX and UI guide to card design
//                 </a>
//               </h3>
//               <p className="text-base text-body-color leading-relaxed mb-7">
//                 Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur
//                 adipiscing elit.
//               </p>
//               <a
//                 href="javascript:void(0)"
//                 className="
//                      inline-block
//                      py-2
//                      px-7
//                      border border-[#E5E7EB]
//                      rounded-full
//                      text-base text-body-color
//                      font-medium
//                      hover:border-primary hover:bg-primary hover:text-white
//                      transition
//                      "
//               >
//                 View Details
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="w-full md:w-1/2 xl:w-1/3 px-4">
//           <div className="bg-white rounded-lg overflow-hidden mb-10">
//             <img
//               src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-03.jpg"
//               alt="image"
//               className="w-full"
//             />
//             <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
//               <h3>
//                 <a
//                   href="javascript:void(0)"
//                   className="
//                         font-semibold
//                         text-dark text-xl
//                         sm:text-[22px]
//                         md:text-xl
//                         lg:text-[22px]
//                         xl:text-xl
//                         2xl:text-[22px]
//                         mb-4
//                         block
//                         hover:text-primary
//                         "
//                 >
//                   Creative Card Component designs graphic elements
//                 </a>
//               </h3>
//               <p className="text-base text-body-color leading-relaxed mb-7">
//                 Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur
//                 adipiscing elit.
//               </p>
//               <a
//                 href="javascript:void(0)"
//                 className="
//                      inline-block
//                      py-2
//                      px-7
//                      border border-[#E5E7EB]
//                      rounded-full
//                      text-base text-body-color
//                      font-medium
//                      hover:border-primary hover:bg-primary hover:text-white
//                      transition
//                      "
//               >
//                 View Details
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// )
