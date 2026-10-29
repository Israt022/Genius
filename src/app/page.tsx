import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import { div } from "motion/react-client";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
    </div>
  );
}
