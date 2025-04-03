import BlogCard from "@/components/BlogCard";
import Blog from "@/components/BlogCard";
import BlogDetail from "@/components/BlogDetail";
import Tabs from "@/components/Tabs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-40">
      <Tabs />
      <div>
        <BlogCard />
             <BlogDetail/>
      </div>
    </div>
  );
}
