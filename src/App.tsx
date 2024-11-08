// Update App.tsx to include Achievements component
import React from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';
import ProjectCard from './components/ProjectCard';
import SkillSection from './components/SkillSection';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import { projects } from './data/projects';

// ... (rest of the App component remains the same, just add the Achievements component after the header)
      <header>...</header>
      
      <section id="achievements">
        <Achievements />
      </section>

      <section id="projects">...</section>
// ... (rest of the component remains the same)