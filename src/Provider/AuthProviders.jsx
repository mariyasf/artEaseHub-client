import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);

    const [loding, setLoding] = useState(true);

    // New User add
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
 

    const authInfo = {
        user,
        loding,
        createNewUser,

    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;