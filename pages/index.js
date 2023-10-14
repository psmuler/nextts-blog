// pages/index.js
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../auth';
import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogoutButton';
import SomeOtherComponent from '../components/otherComponent'

function Home() {
  const [user] = useAuthState(auth);

  return (
    <div>
      <h1>Next.js Firebase Authentication</h1>
      {user ? (
        <div>
          <p>ログイン中: {user.displayName}</p>
          <LogoutButton />
          <SomeOtherComponent />
        </div>
      ) : (
        <LoginButton />
      )}
    </div>
  );
}

export default Home;
