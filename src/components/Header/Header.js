import React, { useEffect, useState } from 'react';
import HeaderStyles from './styles.module.scss';
import { FaBars, FaWindowClose } from 'react-icons/fa';
function Header() {
  const [showMobileNav, setshowMobileNav] = useState(false);
  const [changeScroll, setchangeScroll] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setchangeScroll(true);
    } else {
      setchangeScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleNavShow = () => {
    setshowMobileNav(!showMobileNav);
  };
  return (
    <div
      className={`${HeaderStyles.headerContainer} ${
        changeScroll && HeaderStyles.whiteBcg
      }`}
    >
      <div className={HeaderStyles.header}>
        <div className={HeaderStyles.iconContainer}>
          {!showMobileNav ? (
            <FaBars
              className={HeaderStyles.navBarsIcon}
              onClick={handleNavShow}
            />
          ) : (
            <FaWindowClose
              className={HeaderStyles.navBarsIcon}
              onClick={handleNavShow}
            />
          )}
        </div>
        <div className={HeaderStyles.logo}>
          <h1>Startup</h1>
        </div>

        <div className={HeaderStyles.navLinks}>
          <ul>
            <li className={HeaderStyles.activeLink}>Home</li>
            <li>About</li>
            <li>Features</li>
            <li>Overview</li>
            <li>Pricing</li>
            <li>Team</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={HeaderStyles.loginRegister}>
          <ul>
            <li className={HeaderStyles.loginLink}>Login</li>
            <li className={HeaderStyles.registerLink}>Register</li>
          </ul>
        </div>
        <div
          className={`${HeaderStyles.mobileNavLinks} ${
            showMobileNav
              ? HeaderStyles.showMobileNav
              : HeaderStyles.hideMobileNav
          }`}
        >
          <ul>
            <li className={HeaderStyles.activeLink}>Home</li>
            <li>About</li>
            <li>Features</li>
            <li>Overview</li>
            <li>Pricing</li>
            <li>Team</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
