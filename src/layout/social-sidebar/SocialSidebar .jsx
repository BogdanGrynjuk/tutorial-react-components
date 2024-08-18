import React from 'react';
import css from './SocialSidebar.module.css';

const SocialSidebar = () => (
  <aside className={css['sidebar-wrapper']}>
    <ul>
      <li>
        <a
          className={css.link}
          href="https://github.com/BogdanGrynjuk/tutorial-react-components"
        >
          1
        </a>
      </li>
      <li>2</li>
      <li>3</li>
    </ul>

    <div className={css['vertical-text']}>
      <span>C</span>
      <span>r</span>
      <span>e</span>
      <span>t</span>
      <span>e</span>
      <span>d</span>
      <span>&nbsp;</span>
      <span>w</span>
      <span>i</span>
      <span>t</span>
      <span>h</span>
      <span>&nbsp;</span>
      <span>l</span>
      <span>o</span>
      <span>v</span>
      <span>e</span>
    </div>
  </aside>
);

export default SocialSidebar;
