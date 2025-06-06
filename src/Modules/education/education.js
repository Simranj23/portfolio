import React from 'react';
import EducationComponent from './educationComponent'; // Import the visual component

function Education() {
  return (
    <div>
      <EducationComponent
        university="City University Of New York"
        date="Jan 2023 - May 2024"
        degree="Master of Science (Finance)"
        gpa="3.9"
        major={['Management of Science and Quantitative Methods']}
      />
      <EducationComponent
        university="University Of Mumabai"
        date="April 2014 - May 2017"
        degree="Bachelor of Commerce"
        gpa="3.7"
        major={['Accounting and Auditing']}
      />
    </div>
  );
}

export default Education;
