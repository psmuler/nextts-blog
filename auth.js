// auth.js ファイルを作成
import { getAuth } from 'firebase/auth';
import { firebaseApp } from './firebase'; // firebase.jsからfirebaseAppを正しくインポート

const auth = getAuth();

export default auth;
