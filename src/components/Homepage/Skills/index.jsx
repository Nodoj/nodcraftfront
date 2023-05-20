import React from 'react';
import styles from './Skills.module.scss'
import { Grid, Paper } from '@material-ui/core';

const skills = [
  { title: 'IT Manager', icon: '/icons/it-manager.svg' },
  { title: 'Web Design', icon: '/icons/web-design.svg' },
  { title: 'Graphic Design', icon: '/icons/graphic-design.svg' },
  { title: 'UI/UX Design', icon: '/icons/ui-ux-design.svg' },
  { title: 'Mobile Development', icon: '/icons/mobile-development.svg' },
  { title: 'Backend Development', icon: '/icons/backend-development.svg' },
  { title: 'Frontend Development', icon: '/icons/frontend-development.svg' },
  { title: 'Project Management', icon: '/icons/project-management.svg' },
  { title: 'Digital Marketing', icon: '/icons/digital-marketing.svg' },
  { title: 'Content Creation', icon: '/icons/content-creation.svg' },
  { title: 'Data Analysis', icon: '/icons/data-analysis.svg' },
  { title: 'Machine Learning', icon: '/icons/machine-learning.svg' },
  { title: 'Cloud Computing', icon: '/icons/cloud-computing.svg' },
  { title: 'DevOps', icon: '/icons/devops.svg' },
  { title: 'Cybersecurity', icon: '/icons/cybersecurity.svg' },
  { title: 'Agile Methodology', icon: '/icons/agile-methodology.svg' },
  { title: 'Product Management', icon: '/icons/product-management.svg' },
  { title: 'Leadership', icon: '/icons/leadership.svg' },
  { title: 'Communication', icon: '/icons/communication.svg' },
  { title: 'Problem Solving', icon: '/icons/problem-solving.svg' },
  { title: 'Creativity', icon: '/icons/creativity.svg' },
  { title: 'Teamwork', icon: '/icons/teamwork.svg' },
  { title: 'Time Management', icon: '/icons/time-management.svg' },
  { title: 'Self-motivation', icon: '/icons/self-motivation.svg' },
];

export const Skills = () => {
  return (
    <div className={styles.skillsContainer}>
      <Grid container spacing={3} justifyContent="center">
        {skills.map((skill) => (
          <Grid item xs={6} sm={4} md={3} key={skill.title}>
            <Paper className={styles.skill}>
              <img className={styles.skillIcon} src={skill.icon} alt={skill.title} />
              <h3 className={styles.skillTitle}>{skill.title}</h3>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

