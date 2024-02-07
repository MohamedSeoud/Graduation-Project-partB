import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { redirect } from 'next/navigation'

const RelatedPost = ({
  image,
  slug,
  title,
  date,
  onClick
}: {
  image?: StaticImageData;
  slug?: string;
  title?: string;
  date?: string;
  onClick?:()=>void
}) => {
  
  return (
    <>
{ slug? 
   <Link href={`/blog-details/${slug}?name=${slug}`} 
   className="flex items-center lg:block xl:flex cursor-pointer" onClick={onClick}>
      <div className="ltr:mr-5 rtl:ml-5 lg:mb-3 xl:mb-0">
        <div className="relative h-[60px] w-[70px] overflow-hidden r hounded-md sm:h-[75px] sm:w-[85px]">
          <Image src={image} alt={title??''} fill />
        </div>
      </div>
      <div className="w-full">
        <h5>
          {slug && <Link 
            href={`/blog-details/${slug}?name=${slug}`}
            className="mb-[6px] block text-base font-medium leading-snug text-black hover:text-primary dark:text-white dark:hover:text-primary"
          >
            {title}
          </Link>
          }
        </h5>
        {date && <p className="text-xs font-medium text-body-color">{date}</p>}
      </div>
    </Link>
    :
    <div className="flex items-center lg:block xl:flex cursor-pointer" onClick={onClick}>
    <div className="ltr:mr-5 rtl:ml-5 lg:mb-3 xl:mb-0">
      <div className="relative h-[60px] w-[70px] overflow-hidden r hounded-md sm:h-[75px] sm:w-[85px]">
        <Image src={image} alt={title??''} fill />
      </div>
    </div>
  </div>
    }
    </>
  );
};

export default RelatedPost;
