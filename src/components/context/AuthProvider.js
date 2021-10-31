import React, {createContext } from 'react';
import useFireBase from '../hooks/useFireBase';


export const AuthContext = createContext();
const AuthProvider = ({children})  => {
   const allContext = useFireBase();
    return (
        <div>
            <AuthContext.Provider value={allContext}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;