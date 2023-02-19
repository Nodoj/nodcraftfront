import React from 'react';
import Container from "@mui/material/Container";
import { AnimatedBg } from '../components/Homepage/AnimatedBg';
import { Hero } from '../components/Homepage/Hero'
import { HeroTitle } from '../components/Homepage/HeroTitle'
import { Postgrid } from '../components/Homepage/Postgrid'
import { Services } from '../components/Services'


export const Home = () => {
 
  return (
    <>
      <AnimatedBg />
      <Hero />
      <Services />
      <Container maxWidth="lg">
        <HeroTitle />
        <Postgrid />
      </Container>
    </>
  );
};
