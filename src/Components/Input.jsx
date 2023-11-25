import React from 'react';
import styles from './Input.module.css';
import { VscLockSmall } from 'react-icons/vsc';
import { LiaUserSolid } from 'react-icons/lia';
import { MdOutlineMailOutline } from 'react-icons/md';

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <div className={styles.wrapper}>
        {label === 'usuário' && (
          <LiaUserSolid
            style={{ height: '22px', width: '22px', color: 'grey' }}
            className={styles.icon}
          />
        )}
        {label === 'senha' && (
          <VscLockSmall
            style={{ height: '22px', width: '22px', color: 'grey' }}
            className={styles.icon}
          />
        )}
        {label === 'email' && (
          <MdOutlineMailOutline
            style={{ height: '22px', width: '22px', color: 'grey' }}
            className={styles.icon}
          />
        )}
        <input
          className={styles.input}
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};

export default Input;
