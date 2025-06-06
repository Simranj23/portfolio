import React from 'react';
import './educationComponent.css';

function EducationComponent({ university, date, degree, gpa, major }) {
  return (
    <div className="education-entry">
      <div className="education-header">
        <h3 className="university">{university}</h3>
        <span className="date">{date}</span>
      </div>
      <div className="degree-gpa-row">
        <h3 className="degree">{degree}</h3>
        <span className="gpa">GPA: {gpa}</span>
      </div>
      <div className="subjects">
        <strong>Major:</strong> {major.join(', ')}
      </div>
    </div>
  );
}

export default EducationComponent;
