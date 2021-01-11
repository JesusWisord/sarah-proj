import React from 'react';
import { RiWhatsappLine } from 'react-icons/ri';
import styles from '../styles/WhatsAppButton.module.scss';

const WhatsAppButton = () => (
  <div className={styles.btn_whatsapp}>
    <a href="https://api.whatsapp.com/send?phone=5216864171354" rel="noreferrer" target="_blank">
      <RiWhatsappLine />
    </a>
  </div>
);

export default WhatsAppButton;
