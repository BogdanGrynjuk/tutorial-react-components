import React from 'react';
import css from './SocialSidebar.module.css';
import githubIcon from '../../images/social-icon-github.svg';
import linkedinIcon from '../../images/social-icon-linkedIn.svg';
import telegramIcon from '../../images/social-icon-telegram.svg';

const SocialSidebar = () => (
  <aside className={css['sidebar-wrapper']}>
    <ul className={css['social-icons']}>
      <li>
        <a
          className={css['social-link']}
          href="https://github.com/BogdanGrynjuk/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" width={25} height={25} />
        </a>
      </li>
      <li>
        <a
          className={css['social-link']}
          href="http://linkedin.com/in/bogdan-grynjuk-7024a710a/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="LinkedIn" width={30} height={30} />
        </a>
      </li>
      <li>
        <a
          className={css['social-link']}
          href="https://t.me/bogdan_grynjuk"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegramIcon} alt="Telegram" width={25} height={25} />
        </a>
      </li>
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
