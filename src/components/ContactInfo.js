import React from 'react';
import styles from './ContactInfo.module.css'; // CSS module for styling

const ContactInfo = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactEmail}>fidawithus@gmail.com</div>
      <div className={styles.contactNames}>
        <div>Pawan Sabharwal: +919810000737</div>
        <div>Ishira Goel: +91 99100 17567</div>
      </div>
    </div>
  );
};

export default ContactInfo;
