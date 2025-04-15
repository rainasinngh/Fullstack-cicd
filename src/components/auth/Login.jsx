import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError('');
            setLoading(true);
            await login(formData.email, formData.password);
            navigate('/');
            window.location.reload();
        } catch (err) {
            setError('Failed to sign in. Please check your credentials.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-neutral flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full">
                {/* Header */}
                <div className="text-center mb-8">
                    <Link to="/" className="text-3xl font-bold text-primary mb-2 inline-block">
                        RAAHAT
                    </Link>
                    <h2 className="text-2xl font-bold text-dark mb-2">
                        Welcome Back
                    </h2>
                    <p className="text-gray-600">
                        Continue your journey to wellness
                    </p>
                </div>

                {/* Form */}
                <div className="bg-white rounded-xl shadow-soft p-8">
                    {error && (
                        <div className="bg-red-50 text-red-500 p-4 rounded-lg mb-6">
                            <i className="fas fa-exclamation-circle mr-2"></i>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-gray-700 mb-2">
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="input-field"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-gray-700 mb-2">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                                className="input-field"
                                placeholder="Enter your password"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="rememberMe"
                                    name="rememberMe"
                                    type="checkbox"
                                    checked={formData.rememberMe}
                                    onChange={handleChange}
                                    className="h-4 w-4 text-primary rounded border-gray-300 focus:ring-primary"
                                />
                                <label htmlFor="rememberMe" className="ml-2 text-gray-700">
                                    Remember me
                                </label>
                            </div>
                            <Link to="/forgot-password" className="text-primary hover:text-primary/80 transition-colors">
                                Forgot password?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="btn-primary w-full ripple"
                        >
                            {loading ? (
                                <span className="flex items-center justify-center">
                                    <i className="fas fa-circle-notch fa-spin mr-2"></i>
                                    Signing in...
                                </span>
                            ) : (
                                <span className="flex items-center justify-center">
                                    Sign In
                                    <i className="fas fa-arrow-right ml-2"></i>
                                </span>
                            )}
                        </button>
                    </form>

                    {/* <div className="mt-8">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white text-gray-500">
                                    Or continue with
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                <i className="fab fa-google text-red-500 mr-2"></i>
                                Google
                            </button>
                            <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                <i className="fab fa-facebook text-blue-600 mr-2"></i>
                                Facebook
                            </button>
                        </div>
                    </div> */}
                </div>

                {/* Footer */}
                <p className="text-center mt-8 text-gray-600">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-primary hover:text-primary/80 transition-colors font-medium">
                        Sign up here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
