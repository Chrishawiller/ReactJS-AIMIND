import React, { useState, useEffect } from 'react';
import '../styles/testimonial.css';

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      text: "Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor",
      author: "Sarah Johnson",
      role: "STUDENT"
    },
    {
      text: "This course completely transformed my career. The instructors were knowledgeable and supportive, and the curriculum was comprehensive. I landed my dream job just two weeks after completing the program!",
      author: "Michael Chen",
      role: "STUDENT"
    },
    {
      text: "The hands-on projects and real-world scenarios made all the difference. I was able to apply what I learned immediately in my current role and got promoted within three months of starting the course.",
      author: "Emma Rodriguez",
      role: "STUDENT"
    },
    {
      text: "As a complete beginner, I was nervous about starting, but the course was perfectly paced with excellent support. The community and mentors were always available to help when I needed it.",
      author: "David Wilson",
      role: "STUDENT"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="testimonial">
      <img 
        src="https://storage.googleapis.com/a1aa/image/2d3dee42-7905-49b7-08cb-a8c84b79b791.jpg" 
        alt="Background" 
        className="testimonial-bg" 
      />
      
      <div className="container">
        <p className="testimonial-subtitle">Testimonial</p>
        <h2 className="testimonial-title">Our Students Says!!</h2>
        
        {/* Testimonial Slides */}
        <div className="testimonial-content">
          <span className="quote-mark">"</span>
          <div className="testimonial-text">
            {testimonials[currentSlide].text}
          </div>
          <span className="quote-mark">"</span>
        </div>
        
        <div className="testimonial-author">
 <img 
    src="/src/assets/icons/profile.svg" 
    alt="User profile" 
    className="user-profile-icon" 
  />           <span className="author-name">{testimonials[currentSlide].author}</span>
          <span className="author-role">{testimonials[currentSlide].role}</span>
        </div>
        
        {/* Indicators */}
        <div className="testimonial-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Controls */}
        <div className="testimonial-controls">
          <button className="control-btn prev-btn" onClick={prevSlide}>
 <img src="/src/assets/icons/left arrow.svg" alt="Previous" className="icon" />          </button>
          <button className="control-btn next-btn" onClick={nextSlide}>
 <img src="/src/assets/icons/right arr.svg" alt="Previous" className="icon" />          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;