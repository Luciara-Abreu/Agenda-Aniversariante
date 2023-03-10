import { useState } from "react";
import { IUserType } from "../shared/interfaces/User";
import { AuthContext } from "./authContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<IUserType | null>(null);
  
const signin = async (email: string, password: string) => {
        const data = await signin(email, password);
        if (data) {
            setUser(user);
            return true;
        }
        return false;
    }
    
    const setToken = (token: string) => {
        console.log('Aqui localStorage Tokem ====> ', setToken)
        localStorage.setItem('authToken', token);
    } 

    const signout = async () => {
        console.log("signout está sendo executada.");
        setUser(null);
        setToken('');
        localStorage.clear();
        console.log('Tokem Logout ====> ', setToken)
        await signout();
    }
 


    return (
        <AuthContext.Provider value = {{user , signin, signout}}>
            {children}
        </AuthContext.Provider>
    );
}