import WorkExperience from "./workExperience";

function CombinedWorkEx() {
  return (
    <div>
        <WorkExperience
            company="PCR"
            date="June 2024 – Present"
            title="Financial Associate"
            location="New York, New York"
            bullets={[
                'Handled portfolio reporting for high-net-worth clients',
                'Collaborated with analysts to audit financial transactions',
                'Improved reporting efficiency by 20% through automation'
            ]}
            />
            <WorkExperience
            company="JP Morgan"
            date="May 2022 – Nov 2022"
            title="Analyst"
            location="Mumbai, India"
            bullets={[
                'Handled portfolio reporting for high-net-worth clients',
                'Collaborated with analysts to audit financial transactions',
                'Improved reporting efficiency by 20% through automation'
            ]}
        />
    </div>
  );
}

export default CombinedWorkEx