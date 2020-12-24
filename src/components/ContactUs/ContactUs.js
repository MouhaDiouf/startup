import React from 'react';
import { FaMap, FaPhone } from 'react-icons/fa';
import { AiFillFacebook, AiFillInstagram, AiFillMail } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';
import { AiFillTwitterCircle } from 'react-icons/ai';
import ContactUsStyles from './style.module.scss';
function ContactUs() {
  return (
    <div className={ContactUsStyles.container}>
      <div className={ContactUsStyles.titles}>
        <h2>
          Contact <span>Us</span>
        </h2>
        <h3>Do You Have Any Questions? </h3>
        <div className={ContactUsStyles.bars}></div>
      </div>

      <div className={ContactUsStyles.formAndContact}>
        <form>
          <h3>Let's Talk About Your Idea</h3>
          <input type="text" placeholder="Name" id="name" /> <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email*"
            required
          />{' '}
          <br />
          <input type="text" name="phone" id="phone" placeholder="Phone" />{' '}
          <br />
          <textarea name="message" id="message" cols="50" rows="10"></textarea>
          <button>
            Send Message
            <span>
              <FiSend />
            </span>{' '}
          </button>
        </form>
        <div className={ContactUsStyles.offices}>
          <h3>Office Location</h3>
          <div className={ContactUsStyles.officesDetails}>
            <FaMap
              className={ContactUsStyles.icon}
              style={{
                color: 'white',
                display: 'inline-block',
                background: '#ff5a6e',
                height: '25px',
                width: '25px',
                padding: '10px',
                borderRadius: '50%',
              }}
            />
            <ul>
              <li>22 Baker Street,</li>
              <li>London, United Kingdom,</li>
              <li>W1U 3BW</li>
            </ul>
          </div>
          <h3>Phone</h3>
          <div className={ContactUsStyles.officesDetails}>
            <FaPhone
              className={ContactUsStyles.icon}
              style={{
                color: 'white',
                display: 'inline-block',
                background: '#ff5a6e',
                height: '25px',
                width: '25px',
                padding: '10px',
                borderRadius: '50%',
              }}
            />
            <ul>
              <li>+44-20-7328-4499,</li>
              <li>+99-34-8878-9989 ,</li>
            </ul>
          </div>{' '}
          <h3>Email</h3>
          <div className={ContactUsStyles.officesDetails}>
            <AiFillMail
              className={ContactUsStyles.icon}
              style={{
                color: 'white',
                display: 'inline-block',
                background: '#ff5a6e',
                height: '25px',
                width: '25px',
                padding: '10px',
                borderRadius: '50%',
              }}
            />
            <ul>
              <li>info@yourdomain.com ,</li>
              <li>admin@yourdomain.com</li>
            </ul>
          </div>
          <h3>Social Addresses</h3>
          <div className={ContactUsStyles.socialAddresses}>
            <ul>
              <li>
                <AiFillTwitterCircle />
              </li>
              <li>
                <AiFillInstagram />
              </li>
              <li>
                <AiFillFacebook />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
