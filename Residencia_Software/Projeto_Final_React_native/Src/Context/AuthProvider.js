import React from 'react';

const initialState = {
    user: null,
    logout: () => null,
};

export const AuthContext = React.createContext(initialState);

export const AuthProvider = ({children}) => {
    const [user, setUser] = React.useState(initialState.user);
    const logout = () => setUser(null);
    const login = (user) => {
        //Realiza tarefas para login

        setUser(user)
    };

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};
