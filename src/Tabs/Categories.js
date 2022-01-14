import React from "react";

const Categories = ({ jobs, setValue, value }) => {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        return (
          <button
            key={job.id}
            onClick={() => {
              setValue(index);
            }}
            className={`job-btn ${index === value && "active-btn"}`}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
