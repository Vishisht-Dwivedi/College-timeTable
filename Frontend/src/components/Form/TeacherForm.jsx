import React, { useState } from 'react';

const TeacherForm = () => {
  const [teacherName, setTeacherName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (teacherName.trim()) {
      setSubmitted(true);
      
      console.log('Teacher name submitted:', teacherName);
    }
  };

  const handleReset = () => {
    setTeacherName('');
    setSubmitted(false);
  };

  return (
    <div className="teacher-form">
      <h2>Teacher Information</h2>
      
      {submitted ? (
        <div className="submission-success">
          <p>Thank you, {teacherName}! Your information has been submitted.</p>
          <button onClick={handleReset}>Submit Another Teacher</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="teacherName">Teacher Name:</label>
            <input
              type="text"
              id="teacherName"
              value={teacherName}
              onChange={(e) => setTeacherName(e.target.value)}
              placeholder="Enter teacher's name"
              required
            />
          </div>
          
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default TeacherForm;