import Accordion from "@/components/Accordion";
import BlogCard from "@/components/BlogCard";
import Blog from "@/components/BlogCard";
import BlogDetail from "@/components/BlogDetail";
import NavBar from "@/components/common/NavBar";
import Navigation from "@/components/common/Navigation";
import Concat from "@/components/Concat";
import Tabs from "@/components/Tabs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-40">
      {/* <Tabs />
      <div>
        <BlogCard />
        <BlogDetail />
      </div> */}
      <Navigation />
      {/* <NavBar /> */}
      <Accordion />
      {/* <Concat/> */}
    </div>

  );
}
