import React from "react";
import "./css/about.css";

const About = () => {
  const members = [
    {
      id: 1,
      name: "Isbah Ansari",
      skills: "HTML, CSS, JavaScript, React, SQL.",
      linkedIn: "https://www.linkedin.com/in/isbahansariii",
      git : "https://github.com/isbahansariii",
    },
    {
      id: 2,
      name: "Yumna Mubeen",
      skills: "HTML, CSS, JavaScript, React, SQL.",
      linkedIn: "https://www.linkedin.com/in/yumna-mubeen-b0893a237",
      git: "https://github.com/Yumna0019",
    },
    {
      id: 3,
      name: "Tahrim Bilal",
      skills: "HTML, CSS, JavaScript, React, SQL.",
      linkedIn: "http://www.linkedin.com/in/tahrim-bilal-b992422b3",
      git: "https://github.com/Tahrim19",
    },
  ];

  return (
    <div className="container about-container mt-5">
      <div className="app-info card mb-5 mt-5">
        <div className="card-body">
          <h1 className="card-title">About Eventify</h1>
          <p className="card-text">
            Eventify is a dynamic application designed to help you stay updated
            with the latest events, trends, and activities. Whether you're
            looking for upcoming events, trending activities, or recent updates,
            Eventify has got you covered. Our goal is to provide a seamless and
            engaging user experience, making it easy for you to discover and
            participate in various events.
          </p>
        </div>
      </div>

      <h2 className="ourTeam">Our Team</h2>
      <div className="team-container">
        {members.map((member) => (
          <div key={member.id} className="panel card member-card">
            <div className="card-body">
              <h3 className="title">{member.name}</h3>
              <p className="para"><strong>Skills:</strong> {member.skills}</p>
              <p className="para">
                <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                </a>
              </p>
              <p className="para">
              <a href={member.git} target="_blank" rel="noopener noreferrer">
                  Github Profile
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
