// TODO: Create an interface for the Candidate objects returned by the API
//  i add the following

import React from "react";
import { CandidateProps } from "../interfaces/CandidateProps";

export const Candidate: React.FC<CandidateProps> = ({
  name,
  username,
  location,
  avatar,
  email,
  html_url,
  company,
}) => {
  return (
    <div className="candidate">
      <img src={avatar} alt={`${name}'s avatar`} />
      <h2>{name}</h2>
      <p>
        <strong>Username:</strong> {username}
      </p>
      <p>
        <strong>Location:</strong> {location}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Company:</strong> {company}
      </p>
      <a href={html_url} target="_blank" rel="noopener noreferrer">
        GitHub Profile
      </a>
    </div>
  );
};
