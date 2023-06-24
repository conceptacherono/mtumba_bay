import React, {useState, useEffect} from 'react';
import { getUserInfo } from "../../../api/auth";
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

interface User {
    email: string;
    username: string;
}

const User = () => {
    const [user, setUser ] = useState<User | null>(null);

    useEffect(() => {
        getUser();
    }, []);

    const getUser =async () => {
        try{
            const response = await getUserInfo();
            //Handle successful user retrieval here
            setUser(response.data.user);
        }catch (error) {
            //Handle user retrieval error here
            console.error(error);
        }
    };

  return (
    <div>
        {user ? (
            <div>
                <p>Email: {user.email}</p>
                <p>Username: {user.username}</p>
                </div>
        ) : (
            <p>Loading user information....</p>
        )}
    </div>
  );
};

export default User;
