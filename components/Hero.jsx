import React from 'react';
import styles from '../styles/Hero.module.scss';

const Hero = () => (
  <div className={styles.hero}>
    <img src="/car.png" alt="" />
    <div className={styles.right_side}>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Error deleniti cupiditate nemo? Ipsam delectus earum dolor
        similique omnis expedita beatae sapiente cupiditate, nihil
        tempore provident recusandae, voluptas eveniet eos mollitia!
      </p>
      <button type="button">
        Click Me!
      </button>
    </div>
  </div>
);

export default Hero;
