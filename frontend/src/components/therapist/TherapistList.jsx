import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TherapistList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSpecialties, setSelectedSpecialties] = useState([]);
    const [selectedLanguages, setSelectedLanguages] = useState([]);

    const therapists = [
        {
            id: 1,
            name: "Dr. Sarah Johnson",
            title: "Clinical Psychologist",
            specialties: ["Anxiety", "Depression", "Trauma"],
            languages: ["English", "Hindi"],
            experience: "15+ years",
            rating: 4.9,
            reviews: 127,
            nextAvailable: "Today",
            image: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=6B9AC4&color=fff"
        },
        {
            id: 2,
            name: "Dr. Rajesh Kumar",
            title: "Psychiatrist",
            specialties: ["Anxiety", "ADHD", "Stress Management"],
            languages: ["Hindi", "English", "Punjabi"],
            experience: "12+ years",
            rating: 4.8,
            reviews: 98,
            nextAvailable: "Tomorrow",
            image: "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=97C1A9&color=fff"
        },
        {
            id: 3,
            name: "Dr. Priya Sharma",
            title: "Counseling Psychologist",
            specialties: ["Relationships", "Career Counseling", "Depression"],
            languages: ["Hindi", "English", "Bengali"],
            experience: "8+ years",
            rating: 4.7,
            reviews: 84,
            nextAvailable: "In 2 days",
            image: "https://ui-avatars.com/api/?name=Priya+Sharma&background=FCB97D&color=fff"
        }
    ];

    const specialties = ["Anxiety", "Depression", "Trauma", "ADHD", "Stress Management", "Relationships", "Career Counseling"];
    const languages = ["English", "Hindi", "Punjabi", "Bengali"];

    const handleSpecialtyToggle = (specialty) => {
        setSelectedSpecialties(prev =>
            prev.includes(specialty)
                ? prev.filter(s => s !== specialty)
                : [...prev, specialty]
        );
    };

    const handleLanguageToggle = (language) => {
        setSelectedLanguages(prev =>
            prev.includes(language)
                ? prev.filter(l => l !== language)
                : [...prev, language]
        );
    };

    const filteredTherapists = therapists.filter(therapist => {
        const matchesSearch = therapist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            therapist.title.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesSpecialties = selectedSpecialties.length === 0 ||
                                 selectedSpecialties.some(s => therapist.specialties.includes(s));
        
        const matchesLanguages = selectedLanguages.length === 0 ||
                               selectedLanguages.some(l => therapist.languages.includes(l));
        
        return matchesSearch && matchesSpecialties && matchesLanguages;
    });

    return (
        <div className="min-h-screen bg-neutral py-12">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-dark mb-4">
                        Find Your Perfect Therapist
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Connect with licensed therapists who specialize in various areas of mental health.
                        Book your first session today.
                    </p>
                </div>

                {/* Search and Filters */}
                <div className="bg-white rounded-xl p-6 shadow-soft mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Search */}
                        <div>
                            <label className="block text-gray-700 mb-2">Search</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Search by name or title..."
                                    className="input-field pl-10"
                                />
                                <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
                            </div>
                        </div>

                        {/* Specialties Filter */}
                        <div>
                            <label className="block text-gray-700 mb-2">Specialties</label>
                            <div className="flex flex-wrap gap-2">
                                {specialties.map(specialty => (
                                    <button
                                        key={specialty}
                                        onClick={() => handleSpecialtyToggle(specialty)}
                                        className={`px-3 py-1 rounded-full text-sm ${
                                            selectedSpecialties.includes(specialty)
                                                ? 'bg-primary text-white'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        } transition-colors`}
                                    >
                                        {specialty}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Languages Filter */}
                        <div>
                            <label className="block text-gray-700 mb-2">Languages</label>
                            <div className="flex flex-wrap gap-2">
                                {languages.map(language => (
                                    <button
                                        key={language}
                                        onClick={() => handleLanguageToggle(language)}
                                        className={`px-3 py-1 rounded-full text-sm ${
                                            selectedLanguages.includes(language)
                                                ? 'bg-secondary text-white'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        } transition-colors`}
                                    >
                                        {language}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Therapist List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredTherapists.map(therapist => (
                        <div key={therapist.id} className="bg-white rounded-xl p-6 shadow-soft hover:shadow-lg transition-shadow">
                            <div className="flex items-start space-x-4">
                                <img
                                    src={therapist.image}
                                    alt={therapist.name}
                                    className="w-16 h-16 rounded-full"
                                />
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-dark">{therapist.name}</h3>
                                    <p className="text-gray-600">{therapist.title}</p>
                                    <div className="flex items-center mt-1">
                                        <span className="text-yellow-500 mr-1">★</span>
                                        <span className="font-medium">{therapist.rating}</span>
                                        <span className="text-gray-400 mx-1">•</span>
                                        <span className="text-gray-600">{therapist.reviews} reviews</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {therapist.specialties.map(specialty => (
                                        <span key={specialty} className="badge badge-primary">
                                            {specialty}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center justify-between text-sm text-gray-600">
                                    <span>
                                        <i className="fas fa-clock mr-1"></i>
                                        {therapist.experience}
                                    </span>
                                    <span>
                                        <i className="fas fa-language mr-1"></i>
                                        {therapist.languages.join(", ")}
                                    </span>
                                </div>
                            </div>

                            <div className="mt-6 flex items-center justify-between">
                                <span className="text-sm">
                                    <i className="fas fa-calendar-alt text-primary mr-1"></i>
                                    Next available: {therapist.nextAvailable}
                                </span>
                                <Link
                                    to={`/book/${therapist.id}`}
                                    className="btn-primary py-2"
                                >
                                    Book Session
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredTherapists.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-4xl mb-4">🔍</div>
                        <h3 className="text-xl font-semibold text-dark mb-2">No therapists found</h3>
                        <p className="text-gray-600">
                            Try adjusting your filters or search terms
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TherapistList;
