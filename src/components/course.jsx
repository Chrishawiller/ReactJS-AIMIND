// components/Courses.jsx
import React from 'react';
import '../styles/courses.css';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Web Design & Development Courses for Beginner",
      students: 25,
      duration: "30m",
      rating: 4.5,
      reviews: 250,
      price: 999,
      discountPrice: 599,
      image: "https://via.placeholder.com/300x200"
    },
    {
      id: 2,
      title: "App Development Course",
      students: 32,
      duration: "45m",
      rating: 4.7,
      reviews: 180,
      price: 1199,
      discountPrice: 799,
      image: "https://via.placeholder.com/300x200"
    },
    {
      id: 3,
      title: "Digital Marketing Masterclass",
      students: 45,
      duration: "1h",
      rating: 4.8,
      reviews: 320,
      price: 1499,
      discountPrice: 999,
      image: "https://via.placeholder.com/300x200"
    },
    {
      id: 4,
      title: "Data Science Fundamentals",
      students: 28,
      duration: "1.5h",
      rating: 4.6,
      reviews: 210,
      price: 1299,
      discountPrice: 899,
      image: "https://via.placeholder.com/300x200"
    }
  ];

  return (
    <section className="courses">
      <div className="container">
        <div className="courses-grid">
          {courses.map(course => (
            <div key={course.id} className="course-card">
              <div className="course-image">
                <img src={course.image} alt={course.title} />
                <div className="course-badge">Popular</div>
              </div>
              
              <div className="course-content">
                <div className="course-meta">
                  <span>{course.students} Students</span>
                  <span>{course.duration}</span>
                </div>
                
                <h3>{course.title}</h3>
                
                <div className="course-rating">
                  <span className="rating">{course.rating}</span>
                  <span className="reviews">({course.reviews})</span>
                </div>
                
                <div className="course-pricing">
                  <span className="original-price">${course.price}</span>
                  <span className="discount-price">${course.discountPrice}</span>
                </div>
                
                <button className="enroll-btn">Enroll Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;