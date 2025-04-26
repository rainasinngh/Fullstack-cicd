import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check for stored user data on mount
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (error) {
                console.error('Error parsing stored user:', error);
                localStorage.removeItem('user');
            }
        }
        setLoading(false);
    }, []);

    // Mock authentication functions for demo purposes
    const login = async (email, password) => {
        try {
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Mock successful login
            const mockUser = {
                id: '1',
                name: 'Demo User',
                email: email,
                role: 'user',
                avatar: `https://ui-avatars.com/api/?name=Demo+User&background=6B9AC4&color=fff`,
                preferences: {
                    notifications: true,
                    emailUpdates: true,
                    reminderTime: '09:00'
                },
                stats: {
                    moodScore: 85,
                    stressLevel: 'Moderate',
                    sleepQuality: 'Good',
                    anxietyLevel: 'Low'
                },
                lastAssessment: new Date().toISOString(),
                upcomingSession: {
                    therapist: 'Dr. Sarah Johnson',
                    date: new Date(Date.now() + 86400000).toISOString(), // Tomorrow
                    type: 'Video Session'
                }
            };
            
            setUser(mockUser);
            localStorage.setItem('user', JSON.stringify(mockUser));
            return mockUser;
        } catch (error) {
            console.error('Login error:', error);
            throw new Error('Failed to login');
        }
    };

    const register = async (email, password, name) => {
        try {
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Mock successful registration
            const mockUser = {
                id: '1',
                name: name,
                email: email,
                role: 'user',
                avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=6B9AC4&color=fff`,
                preferences: {
                    notifications: true,
                    emailUpdates: true,
                    reminderTime: '09:00'
                },
                stats: {
                    moodScore: 75,
                    stressLevel: 'Low',
                    sleepQuality: 'Fair',
                    anxietyLevel: 'Low'
                },
                lastAssessment: null,
                upcomingSession: null
            };
            
            setUser(mockUser);
            localStorage.setItem('user', JSON.stringify(mockUser));
            return mockUser;
        } catch (error) {
            console.error('Registration error:', error);
            throw new Error('Failed to register');
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    const updateProfile = async (data) => {
        try {
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            const updatedUser = {
                ...user,
                ...data,
                avatar: data.name 
                    ? `https://ui-avatars.com/api/?name=${encodeURIComponent(data.name)}&background=6B9AC4&color=fff`
                    : user.avatar
            };
            
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
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            const updatedUser = {
                ...user,
                stats: {
                    ...user.stats,
                    ...stats
                },
                lastAssessment: new Date().toISOString()
            };
            
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