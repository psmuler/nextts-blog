// components/LogoutButton.js
import { signOut } from 'firebase/auth';
import auth from '../auth';

function LogoutButton() {
    const handleLogout = async () => {
        try {
            await signOut(auth);
            console.log('ログアウト成功');
        } catch (error) {
            console.error('ログアウトエラー', error);
        }
    }

    return (
        <div>
            <button onClick={handleLogout}>ログアウト</button>
        </div>
    );
}

export default LogoutButton;
