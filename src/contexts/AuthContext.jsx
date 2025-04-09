import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
    
        if (token) {
            axios.get('http://localhost:8000/api/users/me', {
                headers: {
                    'auth-token': token
                }
            })
            .then(res => {
                setUser(res.data); // user is returned from the backend
            })
            .catch(err => {
                console.error('Invalid token:', err);
                localStorage.removeItem('token');
            })
            .finally(() => {
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
    }, []);    


    const login = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:8000/api/auth/login', { email, password });
            const { token, user } = response.data;

            setUser(user);
            // localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', token);

            return { token, user };
        } catch (error) {
            console.error('Login error:', error);
            throw new Error('Failed to login');
        }
    };

    const register = async (email, password, name, role) => {
        try {
            const response = await axios.post('http://localhost:8000/api/auth/register', { email, password, name, role });
            const { token, user } = response.data;

            setUser(user);
            // console.log(user);
            // localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', token);

            return { token, user };
        } catch (error) {
            console.error('Registration error:', error);
            throw new Error('Failed to register');
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
        window.location.href = '/';
    };


    const updateProfile = async (data) => {
        try {
            const response = await axios.put(`http://localhost:8000/api/users/${user.id}`, data);
            const updatedUser = response.data;
            setUser(updatedUser);
            localStorage.setItem('user', JSON.stringify(updatedUser));
            return updatedUser;
        } catch (error) {
            console.error('Profile update error:', error);
            throw new Error('Failed to update profile');
        }
    };

    const updateStats = async (stats) => {
        try {
            const token = localStorage.getItem('token');

            const response = await axios.put(
                `http://localhost:8000/api/users/${user._id}/stats`,
                stats,
                {
                    headers: {
                        'auth-token': token
                    }
                }
            );

            const updatedUser = response.data;
            setUser(updatedUser);
            localStorage.setItem('user', JSON.stringify(updatedUser));
            return updatedUser;
        } catch (error) {
            console.error('Stats update error:', error);
            throw new Error('Failed to update stats');
        }
    };


    const value = {
        user,
        login,
        register,
        logout,
        updateProfile,
        updateStats,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
