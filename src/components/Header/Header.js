import React from 'react';
import HeaderStyles from '.styles.module.scss';
function Header() {
  return (
    <div>
      <div className={HeaderStyles.logo}>
        <h1>LOGO</h1>
      </div>
      <div className={HeaderStyles.navLinks}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Features</li>
          <li>Overview</li>
          <li>Pricing</li>
          <li>Team</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className={HeaderStyles.loginRegisterDiv}>
        <ul>
          <li className={HeaderStyles.loginLink}>Login</li>
          <li className={HeaderStyles.registerLink}>Register</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
