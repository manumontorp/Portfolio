import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function App() {
  return (
    <div>
      <header>
        <h1>ManuelDev</h1>
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="about" className="section">
          <h2>Acerca de mi</h2>
          <p>
            Hola, mi nombre es Manuel Montoya y soy un desarrollador Full-Stack.
            Esta es mi primer experiencia en programacion, en la que desarrollo mi propio portfolio web,
            a partir de HTML, CSS, JavasScript y usando React. Por fuera de la programacion, he estudiado
            las carreras de Licenciatura en Historia en la Universidad Nacional del Centro de la Provincia de Buenos Aires,
            en mi ciudad natal Tandil; además de la Licenciatura en Psicologia en la Universidad Nacional de La Plata.
            En mi tiempo libre disfruto jugando videojuegos, viendo cine y tocando la guitarra.
          </p>
        </section>

        <section id="education" className="section">
          <h2>Educacion</h2>
          <ul>
            <li>Fullstack Web Developer, Argentina Programa 3.0, INTI</li>
            <li></li>
          </ul>
        </section>

        <section id="experience" className="section">
          <h2>Experiencia</h2>
          <ul></ul>