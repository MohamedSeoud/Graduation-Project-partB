import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero"
import Video from "@/components/Video";


export default function Home() {
  return (
    <div className=" flex flex-col overflow-x-hidden">
      <ScrollUp />
      <Hero />
      <Video />
      <Blog />    
      <AboutSectionTwo />
      </div>
  );
}
