import React from 'react';
import BottomLinksStyles from './styles.module.scss';
function BottomLinks() {
  return (
    <div className={BottomLinksStyles.container}>
      <div className={BottomLinksStyles.companyDescription}>
        <h2>Startup</h2>
        <p>
          Celebrated conviction stimulated principles day. Sure fail or in said
          west. Right my front it wound cause fully am sorry if. She jointure
          goodness interest debating did outweigh.
        </p>
      </div>
      <div className={BottomLinksStyles.companyInfo}>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Company History</li>
          <li>Features</li>
          <li>Blog Page</li>
        </ul>
      </div>
      <div className={BottomLinksStyles.contactInfo}>
        <p>
          Possible offering at contempt mr distance stronger an. Attachment
          excellence announcing
        </p>
        <ul>
          <li>
            <h3>Website</h3>
            <p>www.validtheme.com</p>
          </li>
          <li>
            <h3>Email</h3>
            <p>support@validtheme.com</p>
          </li>{' '}
          <li>
            <h3>Phone</h3>
            <p>+44-20-7328-4499</p>
          </li>
        </ul>
      </div>
      <div className={BottomLinksStyles.resources}>
        <ul>
          <li>Career</li>
          <li>Leadership</li>
          <li>Strategy</li>
          <li>Services</li>
          <li>History</li>
        </ul>
      </div>
    </div>
  );
}

export default BottomLinks;
