import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    const features = [
        {
            icon: 'fas fa-brain',
            title: 'AI-Powered Assessment',
            description: 'Take our comprehensive mental health assessment powered by advanced AI technology.'
        },
        {
            icon: 'fas fa-user-md',
            title: 'Expert Therapists',
            description: 'Connect with certified mental health professionals for personalized care.'
        },
        {
            icon: 'fas fa-shield-alt',
            title: 'Safe & Confidential',
            description: 'Your privacy is our priority. All conversations and data are fully encrypted.'
        },
        {
            icon: 'fas fa-clock',
            title: '24/7 Support',
            description: 'Access support whenever you need it, with round-the-clock availability.'
        }
    ];

    const testimonials = [
        {
            name: 'Sarah M.',
            role: 'Student',
            content: 'RAAHAT helped me manage my anxiety during exam season. The therapists are incredibly supportive.',
            image: 'https://ui-avatars.com/api/?name=Sarah+M&background=6B9AC4&color=fff'
        },
        {
            name: 'John D.',
            role: 'Professional',
            content: 'The AI assessment was eye-opening. It helped me understand my stress patterns and find better coping mechanisms.',
            image: 'https://ui-avatars.com/api/?name=John+D&background=97C1A9&color=fff'
        },
        {
            name: 'Emily R.',
            role: 'Teacher',
            content: 'Having access to mental health support from home has been life-changing. Thank you, RAAHAT!',
            image: 'https://ui-avatars.com/api/?name=Emily+R&background=FCB97D&color=fff'
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Navigation */}
            <nav className="bg-white shadow-sm">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="text-2xl font-bold text-primary">
                            RAAHAT
                        </Link>
                        <div className="hidden md:flex items-center space-x-8">
                            <Link to="/" className="text-dark hover:text-primary transition-colors">Home</Link>
                            <Link to="/about" className="text-dark hover:text-primary transition-colors">About</Link>
                            <Link to="/services" className="text-dark hover:text-primary transition-colors">Services</Link>
                            <Link to="/contact" className="text-dark hover:text-primary transition-colors">Contact</Link>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Link to="/login" className="text-dark hover:text-primary transition-colors">
                                <button className="px-6 py-2 text-primary bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                                    Login
                                </button>
                            </Link>
                            <Link to="/register" className="text-white">
                                <button className="px-6 py-2 bg-primary rounded-lg hover:bg-primary/90 transition-colors">
                                    Sign Up
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="bg-neutral py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold text-dark mb-6">
                            Begin Your Journey to
                            <span className="block text-primary">Mental Wellness</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-12">
                            Connect with certified therapists, take AI-powered assessments, and
                            receive personalized care in a safe, supportive environment.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link to="/assessment" className="w-full sm:w-auto">
                                <button className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2 ripple">
                                    <span>Start Assessment</span>
                                    <i className="fas fa-arrow-right"></i>
                                </button>
                            </Link>
                            <Link to="/therapists" className="w-full sm:w-auto">
                                <button className="w-full sm:w-auto px-8 py-4 bg-secondary/20 text-secondary rounded-lg hover:bg-secondary/30 transition-colors flex items-center justify-center space-x-2">
                                    <span>Find Therapist</span>
                                    <i className="fas fa-user-md"></i>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-dark text-center mb-12">
                        Why Choose RAAHAT?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="card group">
                                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <i className={`${feature.icon} text-2xl text-primary`}></i>
                                </div>
                                <h3 className="text-xl font-semibold text-dark mb-4">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-neutral py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-dark text-center mb-12">
                        What Our Users Say
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-soft hover:shadow-lg transition-shadow">
                                <div className="flex items-center space-x-4 mb-6">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-dark">{testimonial.name}</h4>
                                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600">{testimonial.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="bg-primary rounded-xl p-12 text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Start Your Mental Wellness Journey Today
                        </h2>
                        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                            Take the first step towards better mental health. Our AI-powered platform
                            and certified therapists are here to support you every step of the way.
                        </p>
                        <Link to="/register">
                            <button className="px-8 py-4 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors ripple">
                                Get Started Now
                                <i className="fas fa-arrow-right ml-2"></i>
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-dark text-white py-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">RAAHAT</h3>
                            <p className="text-gray-400">
                                Your partner in mental wellness, providing AI-powered support and
                                professional care.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                                <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                                <li><Link to="/therapists" className="text-gray-400 hover:text-white transition-colors">Find Therapist</Link></li>
                                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Resources</h4>
                            <ul className="space-y-2">
                                <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                                <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
                                <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                                <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Connect With Us</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <i className="fab fa-facebook text-xl"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <i className="fab fa-twitter text-xl"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <i className="fab fa-instagram text-xl"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <i className="fab fa-linkedin text-xl"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                        <p>&copy; {new Date().getFullYear()} RAAHAT. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
