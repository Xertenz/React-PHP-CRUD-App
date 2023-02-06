import React from "react";
import "./home.css";
// import '../sass/main.scss'
import Header from "./../../components/header/Header";
import Top from "../../components/top/Top";
import Hero from "../../components/hero/Hero";
import About from "../../components/about/About";
import Services from "../../components/services/Services";
import Blog from "../../components/blog/Blog";
import Footer from "../../components/footer/Footer";
function Home() {
  return (
    <div>
      <Top />
      <Header />
      <Hero />
      <About />
      <Services />
      <Blog />
      <Footer />
    </div>
  );
}

export default Home;
