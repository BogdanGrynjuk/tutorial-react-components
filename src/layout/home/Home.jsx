import React from 'react';
import { DEPENDENCIES } from './constants';
import './Home.css';


const Home = () => (
  <>
    <h1 className="title"><span>Розширювана колекція React компонентів</span></h1>
    <p>У цьому додатку створено бібліотеку компонентів для проектів на  <strong>ReactJS</strong>.</p>    
    <p>Тут розглянуто створення як простих компонентів, таких як кнопки, бейджики, іконки і т.п., так і об'єднання їх у більш складні компоненти: вкладки, чипи, модальні вікна.</p>
    <p>Усі компоненти написані з перевіркою ESLint.</p>
    <p>Будь-який компонент ви можете завантажити та вільно переписати під свої завдання або розширити його функціональність.</p>
    <h3><span>Dependencies:</span></h3>
    <ul className="dependencies">
      {DEPENDENCIES.map(({ id, name, link }) => (
        <li className="dependencyItem" key={id}>
          <a className="dependencyLink" href={link} rel="noopener noreferrer" target="_blank">{name}</a>
        </li>
      ))}
    </ul>    
  </>
);

export default Home;
