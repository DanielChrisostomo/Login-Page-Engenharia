import React from 'react';
import styles from './Home.module.css';
import { UserContext } from '../UserContext';
import { ReactComponent as Engineer } from '../../img/enguser.svg';

const Home = () => {
  const { userLogout, data } = React.useContext(UserContext);
  console.log(data);

  return (
    <div className={`${styles.home} animeLeft`}>
      <h1>
        Bem Vindo <span style={{ color: 'green' }}>{data.nome}</span> !
      </h1>
      <Engineer
        className={'engineer'}
        style={{
          display: 'block',
          width: '150px',
          maxWidth: '100%',
          minHeight: '150px',
        }}
      />
      <button onClick={userLogout}>Sair</button>
    </div>
  );
};

export default Home;
