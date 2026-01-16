import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import FeaturesRow from "../Components/FeaturesRow";
import About from "../Components/About";
import Partners from "../Components/Partners";
import Services from "../Components/Services";
import CTAForm from "../Components/CTAForm";
import Process from "../Components/Process";
import NothingSecures from "../Components/NothingSecures";
import Testimonials from "../Components/Testimonials";
import BigBannerCTA from "../Components/BigBannerCTA";
import Blog from "../Components/Blog";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import VideoModal from "../Components/VideoModal";
import ScrollToTop from "../Components/ScrollToTop";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturesRow />

      <About />
      <Partners />
      <Services />

      <CTAForm />
      <Process />

      <NothingSecures />
      <Testimonials />

      <BigBannerCTA />
      <Blog />

      <Newsletter />
      <Footer />

      <VideoModal />
      <ScrollToTop />
    </>
  );
};

export default Home;
