import Accordion from "@/components/Accordion";
import BlogCard from "@/components/BlogCard";
import Blog from "@/components/BlogCard";
import BlogDetail from "@/components/BlogDetail";
import Concat from "@/components/Concat";
import DyanmicAccordion from "@/components/DyanmicAccordion";
import NavBar from "@/components/NavBar";
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
      {/* <NavBar/> */}
      {/* <Accordion /> */}
      {/* <Concat/> */}
      <DyanmicAccordion />
    </div>

  );
}
