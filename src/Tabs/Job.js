import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const Job = ({ company, dates, duties, title }) => {
  return (
    <article key={1} className="job-info">
      <h3>{title}</h3>
      <h4>{company}</h4>
      <p className="job-date">{dates}</p>
      {duties.map((duty, index) => {
        return (
          <div key={index} className="job-desc">
            <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
            <p>{duty}</p>
          </div>
        );
      })}
    </article>
  );
};

export default Job;
