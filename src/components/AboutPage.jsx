import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

const AboutPage = () => {
    return (
        <div className="min-h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <section className="bg-neutral py-20">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                        About <span className="text-primary">RAAHAT</span>
                    </h1>
                    <p className="text-lg text-gray-600 mb-6">
                        RAAHAT is your trusted companion on the journey to better mental health. Our mission is to
                        break the stigma, provide easy access to professional care, and leverage AI to support mental
                        wellness for everyone.
                    </p>
                    <p className="text-gray-600">
                        Whether you’re dealing with stress, anxiety, or just need someone to talk to, RAAHAT is here
                        to listen, understand, and guide you.
                    </p>
                </div>
            </section>

            {/* Mission and Features */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-dark text-center mb-12">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Compassionate Care',
                                description:
                                    'We believe in empathy-first care where users are treated with respect, understanding, and dignity.'
                            },
                            {
                                title: 'AI with a Purpose',
                                description:
                                    'Our intelligent assessment tools are designed to help users gain insights and access the right support faster.'
                            },
                            {
                                title: 'Accessibility',
                                description:
                                    'Mental wellness should be available to everyone — anytime, anywhere, affordably.'
                            }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <h3 className="text-xl font-semibold text-dark mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-primary text-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-6">Start Your Journey Today</h2>
                    <p className="mb-8 max-w-2xl mx-auto">
                        Don’t wait to prioritize your mental health. Join RAAHAT now to access expert support and
                        powerful tools tailored to your wellbeing.
                    </p>
                    <Link to="/register">
                        <button className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors">
                            Get Started
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;