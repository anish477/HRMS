import React, { useState } from 'react';
import './index.css';

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
    console.log(`Changing response for Course ${courseId} to: ${value}`);
    setLessonResponses((prevResponses) => ({
      ...prevResponses,
      [courseId]: value,
    }));
  };

  const handleLessonResponseSubmit = (courseId) => {
    const response = lessonResponses[courseId] || '';
    console.log(`Submitting response for Course ${courseId}: ${response}`);
    setLessonResponses((prevResponses) => ({
      ...prevResponses,
      [courseId]: '',
    }));
  };

  console.log('Rendered with courses:', courses);
  console.log('Current lessonResponses:', lessonResponses);

  return (
    <div className="training-development-container">
      {/* Header */}
      <header className="header">
        <h1>Training Development</h1>
      </header>

      {/* Course content */}
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
  );
};

export default TrainingDevelopmentPage;
