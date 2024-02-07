'use client'

import { useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import Aos from "aos";
import "aos/dist/aos.css";
import { DataFunction } from "@/data/data";

const Blog = () => {

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  const data = DataFunction()
  return (
    <section  data-aos="fade-left" id="blog" className="bg-primary/5 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {data.map((blog) => (
            <div key={blog.name} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
