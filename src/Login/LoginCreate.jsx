import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';
import { USER_POST } from '../Api/api';
import useLogin from '../Hooks/useLogin';
import useFetch from '../Hooks/useFetch';
import Input from '../Components/Input';
import Button from '../Components/Button';
import { ReactComponent as Engineer } from '../../img/enguser.svg';

const LoginCreate = () => {
  const username = useLogin();
  const password = useLogin();
  const email = useLogin('email');

  const { userLogin } = React.useContext(UserContext);
  const { error, loading, request } = useFetch();

  async function handleLogin(e) {
    e.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <div className={'loginContainer'}>
      <div className={'loginImg'}>
        <h1>LOGIN ENGENHARIA</h1>
      </div>
      <div className={'formContainer'}>
        <form className={'formContainer animeDown'} onSubmit={handleLogin}>
          <h2>Crie sua conta</h2>
          <div>
            <Engineer
              style={{
                display: 'block',
                width: '100px',
                maxWidth: '100%',
                minHeight: '100px',
              }}
            />
          </div>
          <Input label="usuário" type="text" name="username" {...username} />
          <Input label="email" type="email" name="email" {...email} />
          <Input label="senha" type="password" name="password" {...password} />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            {loading ? (
              <Button disabled>criando...</Button>
            ) : (
              <Button>criar conta</Button>
            )}
            <Link to="/">Voltar</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginCreate;
