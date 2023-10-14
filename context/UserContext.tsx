
// context/UserContext.js
import { createContext, useContext, useState } from 'react';

const UserContext = createContext(null);

export function useUser() {
    return useContext(UserContext);
}

export function UserProvider({ children }) {
    const [uid, setUid] = useState(null);

    return (
        <UserContext.Provider value={{ uid, setUid }}>
            {children}
        </UserContext.Provider>
    );
}
