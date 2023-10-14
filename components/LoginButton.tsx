// components/LoginButton.js
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import auth from '../auth';
import { useUser } from '../context/UserContext';


function LoginButton() {
    const { setUid } = useUser();

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const uid = result.user.uid;
            setUid(uid);
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
