import { useState } from 'react';
import styles from './AuthComponent.module.scss';
import LoginForm from '../LoginForm/LoginForm';
import SignUpForm from '../SignUpForm/SignUpForm';

export default function AuthComponent({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className={styles.AuthComponent}>
      <div>
        <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
      </div>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
    </main>
  );
}