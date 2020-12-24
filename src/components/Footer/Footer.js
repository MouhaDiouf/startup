import React from 'react';
import FooterStyles from './styles.module.scss';
function Footer() {
  return (
    <div className={FooterStyles.container}>
      <div className={FooterStyles.left}>
        © Copyright 2020. All Rights Reserved By{' '}
        <a href="https://mouhadiouf.com" target="_blank" rel="noreferrer">
          Mouha Diouf
        </a>{' '}
      </div>
      <div className={FooterStyles.right}>
        <ul>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
