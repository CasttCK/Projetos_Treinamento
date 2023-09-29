import React from 'react';
import AppRoute from './AppRoute';
import AuthRoute from './AuthRoute';
import { AuthContext } from '../Context/AuthProvider';

const Routes = () => {
    const {user} = React.useContext(AuthContext);
    return user ? <AppRoute /> : <AuthRoute />;
};

export default Routes;