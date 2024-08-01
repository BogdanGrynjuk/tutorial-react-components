import React from 'react';
import PropTypes from 'prop-types';
import { Link, Outlet } from 'react-router-dom';

import css from './Sandbox.module.css';

const Sandbox = ({ componentDetails: {title, description, usage} }) => ( 
  <>    
    <h1 className={css.title}><span>{title}</span></h1>
    <p>{description}</p>
    <h2><span>Застосування:</span></h2>
    <ol>
      {usage.map((item, index) => (
        <li key={index}>
          <p><strong>{item.title}:</strong> {item.content}</p>
        </li>
      ))}
    </ol>
    <ul className={css.navigation}>
      <li className={css.navigationItem}>
        <Link to="code">Показати код компонента</Link>
      </li>
      <li className={css.navigationItem}>
        <Link to="examples">Показати приклади</Link>
      </li>        
    </ul>
    <section>
      <Outlet/>
    </section>
  </>
);

Sandbox.propTypes = {
  componentDetails: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    usage: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        content: PropTypes.string
      })
    )
  })
};

export default Sandbox;
