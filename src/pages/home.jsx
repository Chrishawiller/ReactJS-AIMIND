// pages/Home.jsx
import React from 'react';
import Header from '../components/header';
import Hero from '../components/hero';
import About from '../components/about';
import Courses from '../components/course';
import WhyUs from '../components/whyus';
import Testimonial from '../components/testimonial';
import Footer from '../components/footer';
import '../styles/header.css';
import '../styles/hero.css';
import '../styles/about.css';
import '../styles/courses.css';
import '../styles/whyus.css';
import '../styles/testimonial.css';
import '../styles/footer.css';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Courses />
      <WhyUs />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;