import { pyramidsModel } from "@/types/pyramids";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: pyramidsModel }) => {
  const { name, images, desc, location, pyramid, date,kingImage } = blog;

  return (
    <>
      <div
        className="wow fadeInUp relative overflow-hidden rounded-md bg-white shadow-one dark:bg-dark"
        data-wow-delay=".1s"
      >
        <Link href={`/blog-details/${name}?name=${name}`} className="relative block h-[220px] w-full">

          <Image src={images[0]} alt="image" fill />
        </Link>
        <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
          <h3>
            <Link
              href={`/blog-details/${name}?name=${name}`}
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {pyramid}
            </Link>
          </h3>
          <p className="mb-6 border-b border-body-color border-opacity-10  text-base overflow-hidden h-[100px] line-clamp-4
           font-medium text-body-color dark:border-white dark:border-opacity-10 pb-8 line-clamp-4">
            {desc} 
          </p>
          <div className="flex items-center">
            <div className="ltr:mr-5 rtl:ml-5 flex items-center border-r border-body-color border-opacity-10 ltr:pr-5 rtl:pl-5
             dark:border-white dark:border-opacity-10 ltr:xl:mr-3 rtl:xl:ml-3 ltr:xl:pr-3 rtl:xl:pl-3 ltr:2xl:mr-5
              rtl:2xl:ml-5 ltr:2xl:pr-5 rtl:2xl:pl-5">
              <div className="ltr:mr-4 rtl:ml-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src={kingImage} alt="author" fill />
                </div>
              </div>
              <div className="w-full px-2">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                   {name}
                </h4>
                <p className="text-xs text-body-color">{date}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
