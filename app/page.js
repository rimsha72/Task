import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Choose from "@/components/Choose";
import About from "@/components/About";
import Testimonial from "@/components/Testimonial";
import Best from "@/components/Best";
import Plans from "@/components/Plans";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Choose />
      <About />
      <Testimonial />
      <Best />
      <Plans />
      <Footer />
    </>
  );
}
