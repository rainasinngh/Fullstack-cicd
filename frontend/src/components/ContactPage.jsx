import React, { useState } from 'react';

const ContactPage = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Normally you'd send form data to your backend here
        console.log('Form submitted:', form);
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen py-20 bg-neutral">
            <div className="container mx-auto px-6 max-w-3xl">
                <h1 className="text-4xl font-bold text-dark text-center mb-6">Contact Us</h1>
                <p className="text-center text-gray-600 mb-12">
                    Have questions or need support? We’re here to help. Fill out the form below and we’ll get back to you as soon as possible.
                </p>

                {submitted ? (
                    <div className="bg-green-100 text-green-800 px-6 py-4 rounded-lg text-center">
                        Thank you for reaching out! We’ll get back to you soon.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md space-y-6">
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Message</label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows="1"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ContactPage;