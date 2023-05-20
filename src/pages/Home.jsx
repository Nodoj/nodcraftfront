import React from 'react';
import { Hero } from '../components/Homepage/Hero'
import { Stats } from '../components/Homepage/Stats'
import { Aboutme } from '../components/Homepage/Aboutme'
import { WorkExperience } from '../components/Homepage/WorkExperience'
import { Skills } from '../components/Homepage/Skills'



export const Home = () => {
 
  return (
    <>
    <Hero />
    <Stats />
    <Aboutme /> 
    <WorkExperience />
    <Skills />
    </>
  );
};
