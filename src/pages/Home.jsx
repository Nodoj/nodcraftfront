import React from 'react';
import { AnimatedBg } from '../components/Homepage/AnimatedBg';
import { Hero } from '../components/Homepage/Hero'
import { HeroTitle } from '../components/Homepage/HeroTitle'
import { Postgrid } from '../components/Homepage/Postgrid'
import { Services } from '../components/Homepage/Services'


export const Home = () => {
 
  return (
    <>
      <AnimatedBg />
      <Hero />
      <Services />
        <HeroTitle />
        <Postgrid />
    </>
  );
};
