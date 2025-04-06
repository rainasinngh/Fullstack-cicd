import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

const ServicesPage = () => {
    const services = [
        {
            title: 'AI Mental Health Assessment',
            description: 'Receive insights through our intelligent, research-backed mental health assessments tailored to your needs.',
            icon: 'fas fa-brain'
        },
        {
            title: '1-on-1 Therapy Sessions',
            description: 'Connect with certified therapists for confidential and personalized therapy sessions.',
            icon: 'fas fa-user-md'
        },
        {
            title: 'Self-Care Resources',
            description: 'Explore meditations, articles, exercises, and more designed to support daily mental wellness.',
            icon: 'fas fa-leaf'
        },
        {
            title: 'Mood & Progress Tracker',
            description: 'Track your emotional progress and identify patterns through a simple and intuitive dashboard.',
            icon: 'fas fa-chart-line'
        }
    ];

    return (
        <div className="min-h-screen">
            <Navbar />
            {/* Header */}
            <section className="bg-neutral py-20">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                        Our <span className="text-primary">Services</span>
                    </h1>
                    <p className="text-lg text-gray-600">
                        Empowering your mental health journey with technology, compassion, and accessibility.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {services.map((service, index) => (
                            <div key={index} className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                                <div className="mb-4 text-primary text-4xl">
                                    <i className={service.icon}></i>
                                </div>
                                <h3 className="text-xl font-semibold text-dark mb-3">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-primary text-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-6">Ready to Take the First Step?</h2>
                    <p className="mb-8 max-w-2xl mx-auto">
                        Sign up now and start experiencing the support and tools designed to guide you through your mental wellness journey.
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

export default ServicesPage;