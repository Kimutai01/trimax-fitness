import Head from "next/head";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import Trainers from "@/components/Trainers";
import Programs from "@/components/Programs";
import Maps from "@/components/Maps";
import { motion, useScroll, useInView } from "framer-motion";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Home() {
  const fadeInUp = {
    start: {
      opacity: 0,

      translateX: 0,
      translateY: 100,
      translateZ: 0,
    },
    end: {
      opacity: 1,
      translateZ: 0,
    },
  };

  return (
    <>
      <Head>
        <title>Trimax fitness</title>
        <meta
          name="description"
          content="This is a webiste for Zero22 Gym in Thika"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo1.png" />
      </Head>

      <Hero />
      <About />
      <Services />
      <Pricing />
      <Programs />
      <Trainers />
      <Maps />
      <Footer />
    </>
  );
}
