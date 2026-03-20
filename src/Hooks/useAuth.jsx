import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const useAuth = () => {
    const authinfo = use(AuthContext);
    return authinfo;
};

export default useAuth;