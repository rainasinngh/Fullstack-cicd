import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Assessment = () => {
    const navigate = useNavigate();
    const { user, updateStats } = useAuth();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [loading, setLoading] = useState(false);

    // Redirect to login if not authenticated
    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    const questions = [
        {
            id: 1,
            text: "How would you rate your overall mood today?",
            type: "scale",
            options: [
                { value: 1, label: "Very Low" },
                { value: 2, label: "Low" },
                { value: 3, label: "Moderate" },
                { value: 4, label: "Good" },
                { value: 5, label: "Excellent" }
            ]
        },
        {
            id: 2,
            text: "How would you describe your stress level?",
            type: "single",
            options: [
                { value: "Low", label: "Low" },
                { value: "Moderate", label: "Moderate" },
                { value: "High", label: "High" },
                { value: "Very High", label: "Very High" }
            ]
        },
        {
            id: 3,
            text: "How well did you sleep last night?",
            type: "single",
            options: [
                { value: "Poor", label: "Poor" },
                { value: "Fair", label: "Fair" },
                { value: "Good", label: "Good" },
                { value: "Excellent", label: "Excellent" }
            ]
        },
        {
            id: 4,
            text: "Select any symptoms you've experienced recently:",
            type: "multiple",
            options: [
                { value: "anxiety", label: "Anxiety" },
                { value: "depression", label: "Depression" },
                { value: "fatigue", label: "Fatigue" },
                { value: "insomnia", label: "Insomnia" },
                { value: "irritability", label: "Irritability" }
            ]
        },
        {
            id: 5,
            text: "How would you rate your anxiety level?",
            type: "scale",
            options: [
                { value: 1, label: "Very Low" },
                { value: 2, label: "Low" },
                { value: 3, label: "Moderate" },
                { value: 4, label: "High" },
                { value: 5, label: "Very High" }
            ]
        }
    ];

    const handleAnswer = (value) => {
        setAnswers(prev => ({
            ...prev,
            [questions[currentQuestion].id]: value
        }));

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(prev => prev + 1);
        }
    };

    const calculateResults = () => {
        // Mock AI analysis based on answers
        const moodScore = answers[1] * 20; // Scale 1-5 converted to 0-100
        const stressLevel = answers[2];
        const sleepQuality = answers[3];
        const anxietyLevel = answers[5] <= 2 ? "Low" : answers[5] >= 4 ? "High" : "Moderate";

        return {
            moodScore,
            stressLevel,
            sleepQuality,
            anxietyLevel,
            symptoms: answers[4] || []
        };
    };

    const handleSubmit = async () => {
        try {
            setLoading(true);
            const results = calculateResults();
            await updateStats(results);
            navigate('/dashboard', { state: { assessmentCompleted: true } });
        } catch (error) {
            console.error('Failed to submit assessment:', error);
        } finally {
            setLoading(false);
        }
    };

    const renderQuestion = () => {
        const question = questions[currentQuestion];

        switch (question.type) {
            case 'scale':
                return (
                    <div className="space-y-4">
                        <div className="flex justify-between mb-2">
                            {question.options.map((option) => (
                                <div key={option.value} className="text-center">
                                    <button
                                        onClick={() => handleAnswer(option.value)}
                                        className={`w-12 h-12 rounded-full ${
                                            answers[question.id] === option.value
                                                ? 'bg-primary text-white'
                                                : 'bg-gray-100 hover:bg-gray-200'
                                        } transition-colors ripple`}
                                    >
                                        {option.value}
                                    </button>
                                    <p className="text-sm text-gray-600 mt-2">{option.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 'single':
                return (
                    <div className="space-y-4">
                        {question.options.map((option) => (
                            <button
                                key={option.value}
                                onClick={() => handleAnswer(option.value)}
                                className={`w-full p-4 rounded-lg text-left ${
                                    answers[question.id] === option.value
                                        ? 'bg-primary text-white'
                                        : 'bg-gray-100 hover:bg-gray-200'
                                } transition-colors ripple`}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                );

            case 'multiple':
                return (
                    <div className="space-y-4">
                        {question.options.map((option) => (
                            <button
                                key={option.value}
                                onClick={() => {
                                    const currentAnswers = answers[question.id] || [];
                                    const newAnswers = currentAnswers.includes(option.value)
                                        ? currentAnswers.filter(v => v !== option.value)
                                        : [...currentAnswers, option.value];
                                    handleAnswer(newAnswers);
                                }}
                                className={`w-full p-4 rounded-lg text-left ${
                                    (answers[question.id] || []).includes(option.value)
                                        ? 'bg-primary text-white'
                                        : 'bg-gray-100 hover:bg-gray-200'
                                } transition-colors ripple`}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-neutral py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                    {/* Progress Bar */}
                    <div className="mb-8">
                        <div className="flex justify-between mb-2">
                            <span className="text-sm text-gray-600">Question {currentQuestion + 1} of {questions.length}</span>
                            <span className="text-sm text-gray-600">{Math.round((currentQuestion / questions.length) * 100)}%</span>
                        </div>
                        <div className="progress-bar">
                            <div
                                className="progress-bar-fill"
                                style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
                            ></div>
                        </div>
                    </div>

                    {/* Question Card */}
                    <div className="bg-white rounded-xl p-8 shadow-soft">
                        <h2 className="text-2xl font-semibold text-dark mb-6">
                            {questions[currentQuestion].text}
                        </h2>

                        {renderQuestion()}

                        {/* Navigation */}
                        <div className="flex justify-between mt-8">
                            <button
                                onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
                                disabled={currentQuestion === 0}
                                className="btn-secondary"
                            >
                                <i className="fas fa-arrow-left mr-2"></i>
                                Previous
                            </button>

                            {currentQuestion === questions.length - 1 ? (
                                <button
                                    onClick={handleSubmit}
                                    disabled={loading}
                                    className="btn-primary"
                                >
                                    {loading ? (
                                        <>
                                            <i className="fas fa-circle-notch fa-spin mr-2"></i>
                                            Analyzing...
                                        </>
                                    ) : (
                                        <>
                                            Submit
                                            <i className="fas fa-check ml-2"></i>
                                        </>
                                    )}
                                </button>
                            ) : (
                                <button
                                    onClick={() => setCurrentQuestion(prev => prev + 1)}
                                    disabled={!answers[questions[currentQuestion].id]}
                                    className="btn-primary"
                                >
                                    Next
                                    <i className="fas fa-arrow-right ml-2"></i>
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Help Text */}
                    <p className="text-center text-gray-600 mt-6">
                        Need help? <button className="text-primary hover:text-primary/80 transition-colors">Contact support</button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Assessment;
