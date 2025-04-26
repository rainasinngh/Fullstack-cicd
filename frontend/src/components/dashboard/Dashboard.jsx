import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Dashboard = () => {
    const { user, logout } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error('Failed to log out:', error);
        }
    };

    const stats = [
        { label: 'Mood Score', value: user?.stats?.moodScore || 0, icon: 'fas fa-smile', color: 'text-yellow-500' },
        { label: 'Stress Level', value: user?.stats?.stressLevel || 'N/A', icon: 'fas fa-brain', color: 'text-blue-500' },
        { label: 'Sleep Quality', value: user?.stats?.sleepQuality || 'N/A', icon: 'fas fa-moon', color: 'text-indigo-500' },
        { label: 'Anxiety Level', value: user?.stats?.anxietyLevel || 'N/A', icon: 'fas fa-heartbeat', color: 'text-red-500' }
    ];

    const quickActions = [
        { label: 'Take Assessment', icon: 'fas fa-clipboard-list', link: '/assessment', color: 'bg-primary' },
        { label: 'Find Therapist', icon: 'fas fa-user-md', link: '/therapists', color: 'bg-secondary' },
        { label: 'View Profile', icon: 'fas fa-user', link: '/profile', color: 'bg-accent' },
        { label: 'Get Help Now', icon: 'fas fa-phone', link: '/help', color: 'bg-success' }
    ];

    return (
        <div className="min-h-screen bg-neutral">
            {/* Navigation */}
            <nav className="bg-white shadow-sm">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Link to="/" className="text-2xl font-bold text-primary">
                                RAAHAT
                            </Link>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <button className="flex items-center space-x-2 text-dark hover:text-primary transition-colors">
                                    {/* <img
                                        src={user?.avatar}
                                        alt={user?.name}
                                        className="w-8 h-8 rounded-full"
                                    /> */}
                                    <span>{user?.name}</span>
                                </button>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="text-gray-600 hover:text-primary transition-colors"
                            >
                                <i className="fas fa-sign-out-alt"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="container mx-auto px-6 py-8">
                {/* Welcome Section */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-dark mb-2">
                        Welcome back, {user?.name}!
                    </h1>
                    <p className="text-gray-600">
                        Track your progress and continue your journey to mental wellness.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white rounded-xl p-6 shadow-soft">
                            <div className="flex items-center justify-between mb-4">
                                <div className={`w-12 h-12 ${stat.color} bg-opacity-10 rounded-lg flex items-center justify-center`}>
                                    <i className={`${stat.icon} ${stat.color}`}></i>
                                </div>
                                <span className="text-2xl font-semibold text-dark">
                                    {stat.value}
                                </span>
                            </div>
                            <h3 className="text-gray-600">{stat.label}</h3>
                        </div>
                    ))}
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {quickActions.map((action, index) => (
                        <Link
                            key={index}
                            to={action.link}
                            className={`${action.color} bg-opacity-10 rounded-xl p-6 hover:bg-opacity-20 transition-all transform hover:scale-105`}
                        >
                            <div className="flex items-center space-x-4">
                                <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center`}>
                                    <i className={`${action.icon} text-white`}></i>
                                </div>
                                <span className="font-medium text-dark">
                                    {action.label}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Upcoming Session */}
                {user?.upcomingSession && (
                    <div className="bg-white rounded-xl p-6 shadow-soft mb-8">
                        <h2 className="text-xl font-semibold text-dark mb-4">
                            Upcoming Session
                        </h2>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                                    <i className="fas fa-video text-primary"></i>
                                </div>
                                <div>
                                    <p className="font-medium text-dark">
                                        {user.upcomingSession.therapist}
                                    </p>
                                    <p className="text-gray-600">
                                        {new Date(user.upcomingSession.date).toLocaleDateString()} - {user.upcomingSession.type}
                                    </p>
                                </div>
                            </div>
                            <button className="btn-primary">
                                Join Session
                            </button>
                        </div>
                    </div>
                )}

                {/* Recent Activity */}
                <div className="bg-white rounded-xl p-6 shadow-soft">
                    <h2 className="text-xl font-semibold text-dark mb-4">
                        Recent Activity
                    </h2>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between py-2 border-b border-gray-100">
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <i className="fas fa-clipboard-list text-blue-500"></i>
                                </div>
                                <div>
                                    <p className="font-medium text-dark">Completed Assessment</p>
                                    <p className="text-sm text-gray-600">
                                        {user?.lastAssessment ? new Date(user.lastAssessment).toLocaleDateString() : 'No recent assessment'}
                                    </p>
                                </div>
                            </div>
                            <Link to="/assessment" className="text-primary hover:text-primary/80 transition-colors">
                                View Results
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
