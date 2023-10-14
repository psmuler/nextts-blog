// 他のコンポーネント
import { useUser } from '../context/UserContext';

function SomeOtherComponent() {
    const { uid } = useUser();

    return (
        <div>
            <p>ユーザーのUID: {uid}</p>
            {uid === 'IiUSAJhdkIbBuUca1UV44zATkrl2' ?
                <p>uid is good</p>
                :
                <p>uid is not good</p>
            }
        </div>
    );
}

export default SomeOtherComponent;
