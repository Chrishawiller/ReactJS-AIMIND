// Home.jsx
import React from 'react';
import Header from '../components/header';
import Hero from '../components/hero';
import About from '../components/about';
import Courses from '../components/course';
import Testimonial from '../components/testimonial';
import WhyUs from '../components/whyus';
import Footer from '../components/footer';
import '../styles/header.css';
import '../styles/hero.css';
import '../styles/about.css';
import '../styles/courses.css';
import '../styles/testimonial.css';
import '../styles/whyus.css';
import '../styles/footer.css';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="course"> 
        <Courses />
      </section>
      <section id="whyus">
              <Testimonial />
        <WhyUs />
      </section>
      <Footer />
    </div>
  );
};

export default Home;