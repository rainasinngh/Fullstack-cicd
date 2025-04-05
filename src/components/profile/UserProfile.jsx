import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const UserProfile = () => {
    const { user, updateProfile } = useAuth();
    const [editing, setEditing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        phone: user?.phone || '',
        preferences: {
            notifications: user?.preferences?.notifications ?? true,
            emailUpdates: user?.preferences?.emailUpdates ?? true,
            reminderTime: user?.preferences?.reminderTime || '09:00'
        }
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        
        if (name.startsWith('preferences.')) {
            const prefName = name.split('.')[1];
            setFormData(prev => ({
                ...prev,
                preferences: {
                    ...prev.preferences,
                    [prefName]: type === 'checkbox' ? checked : value
                }
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            await updateProfile(formData);
            setEditing(false);
        } catch (error) {
            console.error('Failed to update profile:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-neutral py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <div className="bg-white rounded-xl p-8 shadow-soft mb-8">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center space-x-4">
                                <img
                                    src={user?.avatar}
                                    alt={user?.name}
                                    className="w-20 h-20 rounded-full"
                                />
                                <div>
                                    <h1 className="text-2xl font-bold text-dark">
                                        {user?.name}
                                    </h1>
                                    <p className="text-gray-600">
                                        Member since {new Date(user?.createdAt || Date.now()).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setEditing(!editing)}
                                className="btn-secondary"
                            >
                                {editing ? (
                                    <>
                                        <i className="fas fa-times mr-2"></i>
                                        Cancel
                                    </>
                                ) : (
                                    <>
                                        <i className="fas fa-edit mr-2"></i>
                                        Edit Profile
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Profile Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name */}
                                <div>
                                    <label className="block text-gray-700 mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        disabled={!editing}
                                        className="input-field"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        disabled={!editing}
                                        className="input-field"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        disabled={!editing}
                                        className="input-field"
                                    />
                                </div>

                                {/* Reminder Time */}
                                <div>
                                    <label className="block text-gray-700 mb-2">
                                        Daily Reminder Time
                                    </label>
                                    <input
                                        type="time"
                                        name="preferences.reminderTime"
                                        value={formData.preferences.reminderTime}
                                        onChange={handleChange}
                                        disabled={!editing}
                                        className="input-field"
                                    />
                                </div>
                            </div>

                            {/* Preferences */}
                            <div className="border-t pt-6">
                                <h3 className="text-lg font-semibold text-dark mb-4">
                                    Notification Preferences
                                </h3>
                                <div className="space-y-4">
                                    <label className="flex items-center space-x-3">
                                        <input
                                            type="checkbox"
                                            name="preferences.notifications"
                                            checked={formData.preferences.notifications}
                                            onChange={handleChange}
                                            disabled={!editing}
                                            className="custom-checkbox"
                                        />
                                        <span className="text-gray-700">
                                            Enable push notifications
                                        </span>
                                    </label>
                                    <label className="flex items-center space-x-3">
                                        <input
                                            type="checkbox"
                                            name="preferences.emailUpdates"
                                            checked={formData.preferences.emailUpdates}
                                            onChange={handleChange}
                                            disabled={!editing}
                                            className="custom-checkbox"
                                        />
                                        <span className="text-gray-700">
                                            Receive email updates
                                        </span>
                                    </label>
                                </div>
                            </div>

                            {/* Submit Button */}
                            {editing && (
                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="btn-primary"
                                    >
                                        {loading ? (
                                            <>
                                                <i className="fas fa-circle-notch fa-spin mr-2"></i>
                                                Saving...
                                            </>
                                        ) : (
                                            <>
                                                Save Changes
                                                <i className="fas fa-check ml-2"></i>
                                            </>
                                        )}
                                    </button>
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Stats Section */}
                    <div className="bg-white rounded-xl p-8 shadow-soft mb-8">
                        <h2 className="text-xl font-semibold text-dark mb-6">
                            Your Progress
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <i className="fas fa-calendar-check text-xl text-primary"></i>
                                </div>
                                <h4 className="font-medium text-dark">Sessions Completed</h4>
                                <p className="text-2xl font-bold text-primary mt-1">12</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <i className="fas fa-chart-line text-xl text-secondary"></i>
                                </div>
                                <h4 className="font-medium text-dark">Progress Score</h4>
                                <p className="text-2xl font-bold text-secondary mt-1">85%</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <i className="fas fa-clock text-xl text-accent"></i>
                                </div>
                                <h4 className="font-medium text-dark">Hours of Therapy</h4>
                                <p className="text-2xl font-bold text-accent mt-1">18</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <i className="fas fa-tasks text-xl text-success"></i>
                                </div>
                                <h4 className="font-medium text-dark">Goals Achieved</h4>
                                <p className="text-2xl font-bold text-success mt-1">8</p>
                            </div>
                        </div>
                    </div>

                    {/* Account Actions */}
                    <div className="bg-white rounded-xl p-8 shadow-soft">
                        <h2 className="text-xl font-semibold text-dark mb-6">
                            Account Actions
                        </h2>
                        <div className="space-y-4">
                            <button className="w-full p-4 text-left rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <i className="fas fa-download text-gray-600"></i>
                                        <span className="font-medium text-dark">Download Your Data</span>
                                    </div>
                                    <i className="fas fa-chevron-right text-gray-400"></i>
                                </div>
                            </button>
                            <button className="w-full p-4 text-left rounded-lg bg-red-50 hover:bg-red-100 transition-colors">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <i className="fas fa-trash-alt text-red-500"></i>
                                        <span className="font-medium text-red-500">Delete Account</span>
                                    </div>
                                    <i className="fas fa-chevron-right text-red-400"></i>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
