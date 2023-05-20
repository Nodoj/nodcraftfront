import React, { useState } from "react";
import { motion } from "framer-motion";
import WorkExperienceData from './workExperienceData.json';
import styles from "./WorkExperience.module.scss";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent
} from '@mui/lab';


export const WorkExperience = () => {
  const [showAllJobs, setShowAllJobs] = useState(false);

  // filter job data to show only the latest two jobs
  const latestJobs = WorkExperienceData.jobs.slice(0, 2);

  // toggle showAllJobs state to show/hide additional jobs
  const handleShowMoreJobs = () => {
    setShowAllJobs(!showAllJobs);
  };

  
  const [jobDescriptions, setJobDescriptions] = useState(
    latestJobs.reduce((obj, job) => {
      obj[job.id] = false;
      return obj;
    }, {})
  );

  const toggleJobDescription = (jobId) => {
    setJobDescriptions({
      ...jobDescriptions,
      [jobId]: !jobDescriptions[jobId],
    });
  };

  return (
    <div className={styles.workExperience}>
      <h2>Work Experience</h2>
      <Timeline position="alternate">
        {latestJobs.map((job) => (
          <TimelineItem key={job.id} className={jobDescriptions[job.id] ? "appear" : ""}>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className={styles.jobHeader}>
                <h3>{job.position}</h3>
                <h4>{job.company}</h4>
                <p>{job.startDate} - {job.endDate}</p>
                <button className={styles.jobToggle} onClick={() => toggleJobDescription(job.id)}>
                  <i className="fas fa-angle-down" />
                </button>
              </div>
              {jobDescriptions[job.id] && (
                <div className={styles.jobDescription}>
                  <ul className={styles.responsibilities}>
                    {job.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </div>
              )}
            </TimelineContent>
          </TimelineItem>
        ))}
        {showAllJobs && WorkExperienceData.jobs.slice(2).map((job) => (
          <TimelineItem key={job.id} className={jobDescriptions[job.id] ? "appear" : ""}>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className={styles.jobHeader}>
                <h3>{job.position}</h3>
                <h4>{job.company}</h4>
                <p>{job.startDate} - {job.endDate}</p>
                <button className={styles.jobToggle} onClick={() => toggleJobDescription(job.id)}>
                  <i className="fas fa-angle-down" />
                </button>
              </div>
              {jobDescriptions[job.id] && (
                <div className={styles.jobDescription}>
                  <ul className={styles.responsibilities}>
                    {job.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </div>
              )}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      {!showAllJobs && (
        <button className={styles.showMoreButton} onClick={handleShowMoreJobs}>Show More</button>
      )}
    </div>
  );
}

