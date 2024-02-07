"use client";

import SingleBlog from "@/components/Blog/SingleBlog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { DataFunction } from "@/data/data";

const Blog = () => {
  const kings = DataFunction()
  return (
    <>
      <Breadcrumb
        pageName="Blog Grid"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {kings.map((blog) => (
              <div
                key={blog.name}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          <div className=" flex justify-center items-center mt-9">

          <button className=" bg-primary text-white p-2 rounded-2xl cursor-pointer ">Show More</button>
          </div>

        </div>
      </section>
    </>
  );
};

export default Blog;
