import Image from "next/image";
import Features from "@/components/Features";
import BlogPage from "./blog/page";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import News from "./news/page";
import "./globals.css";

export default function Home() {
  return (
    <>
      <Hero />
      <News/>
      <BlogPage />
      <Features />
      <Section />
    </>
  );
}
