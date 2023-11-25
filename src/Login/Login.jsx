import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import useLogin from '../Hooks/useLogin';
import Input from '../Components/Input';
import { UserContext } from '../UserContext';
import { ReactComponent as Engineer } from '../../img/enguser.svg';
import Button from '../Components/Button';

const Login = () => {
  const username = useLogin();
  const password = useLogin();

  const { userLogin, error, login, loading } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/home" />;

  async function handleLogin(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }
  return (
    <div className={'loginContainer'}>
      <div className={'loginImg'}>
        <h1>LOGIN ENGENHARIA</h1>
      </div>
      <div className={'formContainer animeDown'}>
        <form onSubmit={handleLogin}>
          <h2>Entre em sua conta</h2>
          <Engineer
            className={'engineer'}
            style={{
              display: 'block',
              width: '100px',
              maxWidth: '100%',
              minHeight: '100px',
            }}
          />
          <Input label="usuário" type="text" name="username" {...username} />
          <Input label="senha" type="password" name="password" {...password} />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              {loading ? (
                <Button disabled>Entrando...</Button>
              ) : (
                <Button>Entrar</Button>
              )}
              <Link to="/create">Crie sua conta</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
