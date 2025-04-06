import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mhmDropdownOpen, setMhmDropdownOpen] = useState(false);
    const [impactDropdownOpen, setImpactDropdownOpen] = useState(false);



    return (
        <nav className="bg-white shadow-sm">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link to="/" className="text-2xl font-bold text-primary">
                        RAAHAT
                    </Link>
                    <div className="hidden md:flex items-center space-x-8">
                        <div
                            className="relative cursor-pointer"
                            onMouseEnter={() => setMhmDropdownOpen(true)}
                            onMouseLeave={() => setMhmDropdownOpen(false)}
                        >
                            <span className="text-dark hover:text-primary transition-colors">Mental Health Matters ▾</span>

                            {mhmDropdownOpen && (
                                <div className="absolute top-full left-0 mt-0 bg-white border rounded-lg shadow-lg py-2 w-56 z-10">
                                    <Link
                                        to="/MHM/stress"
                                        className="block px-4 py-2 text-dark hover:bg-primary/10 hover:text-primary"
                                    >
                                        Stress
                                    </Link>
                                    <Link
                                        to="/MHM/anxiety"
                                        className="block px-4 py-2 text-dark hover:bg-primary/10 hover:text-primary"
                                    >
                                        Anxiety
                                    </Link>
                                    <Link
                                        to="/MHM/depression"
                                        className="block px-4 py-2 text-dark hover:bg-primary/10 hover:text-primary"
                                    >
                                        Depression
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link to="/services" className="text-dark hover:text-primary transition-colors">Services</Link>
                        <div
                            className="relative cursor-pointer"
                            onMouseEnter={() => setImpactDropdownOpen(true)}
                            onMouseLeave={() => setImpactDropdownOpen(false)}
                        >
                            <span className="text-dark hover:text-primary transition-colors">Impact ▾</span>

                            {impactDropdownOpen && (
                                <div className="absolute top-full left-0 mt-0 bg-white border rounded-lg shadow-lg py-2 w-56 z-10">
                                    <Link
                                        to="/impact/stories"
                                        className="block px-4 py-2 text-dark hover:bg-primary/10 hover:text-primary"
                                    >
                                        Stories of Hope
                                    </Link>
                                    <Link
                                        to="/impact/share-stories"
                                        className="block px-4 py-2 text-dark hover:bg-primary/10 hover:text-primary"
                                    >
                                        Share Your Story
                                    </Link>
                                </div>
                            )}
                        </div>

                        <div
                            className="relative cursor-pointer"
                            onMouseEnter={() => setDropdownOpen(true)}
                            onMouseLeave={() => setDropdownOpen(false)}
                        >
                            <span className="text-dark hover:text-primary transition-colors">Find Help ▾</span>

                            {dropdownOpen && (
                                <div className="absolute top-full left-0 mt-0 bg-white border rounded-lg shadow-lg py-2 w-48 z-10">
                                    <Link
                                        to="/helpline"
                                        className="block px-4 py-2 text-dark hover:bg-primary/10 hover:text-primary"
                                    >
                                        Helpline
                                    </Link>
                                    <Link
                                        to="/professional"
                                        className="block px-4 py-2 text-dark hover:bg-primary/10 hover:text-primary"
                                    >
                                        Find a Professional
                                    </Link>
                                    <Link
                                        to="/self-help"
                                        className="block px-4 py-2 text-dark hover:bg-primary/10 hover:text-primary"
                                    >
                                        Self-Help
                                    </Link>
                                </div>
                            )}
                        </div>
                        <Link to="/about" className="text-dark hover:text-primary transition-colors">About Us</Link>


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
    );
};

export default Navbar;
