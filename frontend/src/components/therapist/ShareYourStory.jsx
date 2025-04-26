import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';

const ShareYourStory = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    story: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ 
      ...formData,
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Story submitted:', formData);
    // Here, you could send the data to a backend or email service.
    setSubmitted(true);
    setFormData({ name: '', email: '', story: '' });
  };

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-primary text-center mb-4">Share Your Story</h1>
        <p className="text-center text-gray-700 mb-10">
          Your journey might be the light someone else needs. Whether you're still healing or have found hope, your words can inspire others to speak up and seek help.
        </p>

        {submitted ? (
          <div className="bg-green-100 text-green-800 p-6 rounded-lg text-center">
            Thank you for sharing your story! 💚 We'll review it with care and get in touch if needed.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl shadow-lg">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email (optional)</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Story</label>
              <textarea
                name="story"
                value={formData.story}
                onChange={handleChange}
                required
                rows="6"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-primary focus:border-primary resize-none"
                placeholder="Tell us about your experience, your challenges, or how you found hope."
              />
            </div>

            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Submit Story
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default ShareYourStory;
