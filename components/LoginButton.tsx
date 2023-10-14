// components/LoginButton.js
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import auth from '../auth';


function LoginButton() {
    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);

            console.log('ログイン成功');
        } catch (error) {
            console.error('ログインエラー', error);
        }
    }

    return (
        <div>
            <button onClick={handleGoogleLogin}>Googleでログイン</button>
        </div>
    );
}

export default LoginButton;
