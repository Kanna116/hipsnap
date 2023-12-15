import Head from "next/head";
import ImageSection from "./image-section";
import Navbar from "./navbar";
import HeroSection from "./hero-section";

export default function Home() {
  return (
    <div className="home w-screen pt-16 ">
      <Head>
        <title>HipSnap</title>
      </Head >
      <Navbar />
      <HeroSection/>
      <ImageSection />
    </div>
  )
}
