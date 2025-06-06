import './WorkExperience.css';

function WorkExperience({ company, date, title, location, bullets }) {
  return (
    <div className="work-entry">
      <div className="work-header">
        <h3 className="company">{company}</h3>
        <span className="date">{date}</span>
      </div>
      <div className="title-location">
        <p className="title">{title}</p>
        <span className="location">{location}</span>
      </div>
      <ul className="description">
        {bullets.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default WorkExperience;
