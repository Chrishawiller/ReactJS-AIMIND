import React from 'react'
import Courses from '../components/course'

const coursespage = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Our Courses</h1>
        <p>Browse all our available courses</p>
      </div>
      <Courses />
    </div>
  )
}

export default coursespage