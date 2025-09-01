import React from 'react';
import '../styles/courses.css';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Web Design & Development Courses for Beginner",
      students: 25,
      duration: "01h 30m",
      rating: 4.5,
      reviews: 250,
      price: 999,
      image: "/src/assets/images/img3.png"
    },
    {
      id: 2,
      title: "Web Design & Development Courses for Beginner",
      students: 25,
      duration: "01h 30m",
      rating: 4.5,
      reviews: 250,
      price: 599,
      image: "/src/assets/images/img3.png"
    },
    {
      id: 3,
      title: "Web Design & Development Courses for Beginner",
      students: 25,
      duration: "01h 30m",
      rating: 4.5,
      reviews: 250,
      price: 999,
      image: "/src/assets/images/img3.png"
    }
  ];

  return (
    <section className="courses">
      <div className="container">
        <h2 className="courses-title">COURSES</h2>
        <div className="courses-scroll">
          {courses.map(course => (
            <div key={course.id} className="course-card">
              <img src={course.image} alt={course.title} className="course-image" />
              
              <div className="course-content">
                <div className="course-meta">
                  <div className="meta-item">
                    <i className="fas fa-user-friends"></i>
                    <span>{course.students} Students</span>
                  </div>
                  <div className="meta-item">
                    <i className="far fa-clock"></i>
                    <span>{course.duration}</span>
                  </div>
                </div>
                
                <h3>{course.title}</h3>
                
                <hr className="course-divider" />
                
                <div className="course-footer">
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <span>{course.rating}({course.reviews})</span>
                  </div>
                  <div className="price">
                    ${course.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;