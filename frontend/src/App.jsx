import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/auth/PrivateRoute';
import LandingPage from './components/LandingPage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import Assessment from './components/assessment/Assessment';
import TherapistList from './components/therapist/TherapistList';
import UserProfile from './components/profile/UserProfile';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Stress from './components/therapist/Stress';
import Anxiety from './components/therapist/Anxiety';
import Depression from './components/therapist/Depression';
import StoriesOfHope from './components/therapist/StoriesOfHope';
import ShareYourStory from './components/therapist/ShareYourStory';
import ServicesPage from './components/ServicesPage';

const App = () => {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/MHM/stress" element={<Stress />} />
                    <Route path="/MHM/anxiety" element={<Anxiety />} />
                    <Route path="/MHM/depression" element={<Depression />} />

                    <Route path="/impact/stories-of-hope" element={<StoriesOfHope />} />
                    <Route path="/impact/share-your-story" element={<ShareYourStory />} />


                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    {/* Protected Routes */}
                    <Route
                        path="/dashboard"
                        element={
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/assessment"
                        element={
                            <PrivateRoute>
                                <Assessment />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/therapists"
                        element={
                            <PrivateRoute>
                                <TherapistList />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/profile"
                        element={
                            <PrivateRoute>
                                <UserProfile />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </AuthProvider>
        </Router>
    );
};

export default App;
