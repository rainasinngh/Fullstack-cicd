import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Register = () => {
    const navigate = useNavigate();
    const { register } = useAuth();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false,
        role: 'user' // default to user
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

    const validatePassword = () => {
        if (formData.password.length < 8) {
            return 'Password must be at least 8 characters long';
        }
        if (formData.password !== formData.confirmPassword) {
            return 'Passwords do not match';
        }
        return '';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const passwordError = validatePassword();
        if (passwordError) {
            setError(passwordError);
            return;
        }

        if (!formData.agreeToTerms) {
            setError('Please agree to the Terms of Service and Privacy Policy');
            return;
        }

        try {
            setError('');
            setLoading(true);
            // Pass role along with registration
            await register(formData.email, formData.password, formData.name, formData.role);
            console.log('Registered as:', formData.role);
            navigate('/dashboard');
        } catch (err) {
            setError('Failed to create an account. Please try again.');
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
                        Create Your Account
                    </h2>
                    <p className="text-gray-600">Begin your journey to mental wellness</p>
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
                            <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="input-field"
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
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
                            <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                                className="input-field"
                                placeholder="Create a password"
                            />
                            <p className="mt-1 text-sm text-gray-500">Must be at least 8 characters long</p>
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">Confirm Password</label>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                required
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="input-field"
                                placeholder="Confirm your password"
                            />
                        </div>

                        {/* Role selection */}
                        <div>
                            <label className="block text-gray-700 mb-2">Registering as</label>
                            <div className="flex gap-4">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="role"
                                        value="user"
                                        checked={formData.role === 'user'}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    User
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="role"
                                        value="therapist"
                                        checked={formData.role === 'therapist'}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    Therapist
                                </label>
                            </div>
                        </div>

                        {/* Terms checkbox */}
                        <div className="flex items-start">
                            <input
                                id="agreeToTerms"
                                name="agreeToTerms"
                                type="checkbox"
                                checked={formData.agreeToTerms}
                                onChange={handleChange}
                                className="mt-1 h-4 w-4 text-primary rounded border-gray-300 focus:ring-primary"
                            />
                            <label htmlFor="agreeToTerms" className="ml-2 text-sm text-gray-600">
                                I agree to the{' '}
                                <Link to="/terms" className="text-primary hover:text-primary/80">Terms of Service</Link>
                                {' '}and{' '}
                                <Link to="/privacy" className="text-primary hover:text-primary/80">Privacy Policy</Link>
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="btn-primary w-full ripple"
                        >
                            {loading ? (
                                <span className="flex items-center justify-center">
                                    <i className="fas fa-circle-notch fa-spin mr-2"></i>
                                    Creating account...
                                </span>
                            ) : (
                                <span className="flex items-center justify-center">
                                    Create Account
                                    <i className="fas fa-arrow-right ml-2"></i>
                                </span>
                            )}
                        </button>
                    </form>
                </div>

                {/* Footer */}
                <p className="text-center mt-8 text-gray-600">
                    Already have an account?{' '}
                    <Link to="/login" className="text-primary hover:text-primary/80 transition-colors font-medium">
                        Sign in here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;