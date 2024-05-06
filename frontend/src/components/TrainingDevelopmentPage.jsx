// src/components/TrainingDevelopmentPage.js
import React, { useState } from 'react';
import Logo from './Logo';
import '../App.css';

const TrainingDevelopmentPage = () => {
  const [courses] = useState([
    { id: 1, title: 'Collaborative Coding with AI', description: 'Learn how to collaborate with AI tools in software development projects.' },
    { id: 2, title: 'Java Programming Fundamentals', description: 'Master the foundational concepts and principles of Java programming.' },
    { id: 3, title: 'Python for Data Science', description: 'Explore Python\'s capabilities for data analysis and machine learning.' },
    { id: 4, title: 'Database Design and Management', description: 'Understand the fundamentals of designing and managing databases.' },
    { id: 5, title: 'Time Management Skills', description: 'Improve your productivity and efficiency with effective time management strategies.' },
    { id: 6, title: 'HTML, CSS, and JavaScript Essentials', description: 'Learn the essentials of front-end web development with HTML, CSS, and JavaScript.' },
  ]);
  const [lessonResponses, setLessonResponses] = useState({});

  const handleLessonResponseChange = (e, courseId) => {
    const { value } = e.target;
    setLessonResponses((prevResponses) => ({
      ...prevResponses,
      [courseId]: value,
    }));
  };

  const handleLessonResponseSubmit = (courseId) => {
    const response = lessonResponses[courseId] || '';
    console.log(`User response for Course ${courseId}: ${response}`);
    setLessonResponses((prevResponses) => ({
      ...prevResponses,
      [courseId]: '',
    }));
  };

  return (
    <div className="training-development-container">
      <header className="header">
        <div className="logo-container">
          <Logo />
          <h1>Training and Development</h1>
        </div>
      </header>
      <div className="main-content">
        <nav className="navbar">
          <ul>
            <li>About Us</li>
            <li>Learn More</li>
            <li>Leave Management System</li>
            <li>Training and Development</li>
            <li>Log Out</li>
          </ul>
        </nav>
        <div className="courses-container">
          {courses.map((course) => (
            <div key={course.id} className="course-item">
              <h2>{course.title}</h2>
              <p>{course.description}</p>
              <textarea
                placeholder="Write what you've learned from this lesson..."
                value={lessonResponses[course.id] || ''}
                onChange={(e) => handleLessonResponseChange(e, course.id)}
                className="lesson-response-input"
              ></textarea>
              <button onClick={() => handleLessonResponseSubmit(course.id)}>Submit</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingDevelopmentPage;
