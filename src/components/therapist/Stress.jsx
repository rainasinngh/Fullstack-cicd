import React from 'react';

const StressPage = () => {
    return (
        <div className="max-w-4xl mx-auto px-6 py-10">
            <h1 className="text-3xl font-bold text-primary mb-6">Understanding Stress</h1>

            {/* Section: Awareness */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-dark mb-2">Mental Health Awareness for Stress</h2>
                <p className="text-gray-700 leading-relaxed">
                Stress is the body’s reaction to any change that it experiences, which requires an adjustment or response. The body reacts to these changes with physical, mental, and emotional responses. The word 'stress' is quite often used in a negative sense.

But stress isn't always bad and it is a normal part of life. In fact, sometimes stress can be positive and can spur one to be productive, creative, prepared for challenges, and stay motivated and focused. But too much stress or prolonged stress can impact our physical and mental health. It can bring on – or worsen – certain symptoms or diseases. Common side effects of stress on the body range from aches and pains, sleep-related issues, nausea and dizziness to anxious or racing thoughts, moodiness, and even irritability and short temper.

When does stress become a matter of concern? When it becomes overwhelming and starts affecting your health, your productivity, your relationships, and the overall quality of your life. There are physical, emotional and behavioral symptoms of stress. Being aware of these can help you understand what you are going through and deal with it accordingly.
                </p>
            </section>

            {/* Section: Signs & Symptoms */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-dark mb-2">Signs & Symptoms of Stress</h2>
                    <h1 className="text-2xl font-semibold text-dark mb-2 mt-4">Cognitive</h1>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Memory problems</li>
                    <li>Inability to concentrate</li>
                    <li>Poor judgment</li>
                    <li>Seeing only the negative</li>
                    <li>Anxious or racing thoughts</li>
                    <li>Constant worrying</li>
                </ul>
                    
                    <h1 className="text-2xl font-semibold text-dark mt-3 mb-2">Emotional</h1>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Moodiness</li>
                    <li>Irritability or short temper</li>
                    <li>Agitation, inability to relax</li>
                    <li>Feeling overwhelmed</li>
                    <li>Sense of loneliness and isolation</li>
                    <li>General unhappiness</li>
                </ul>
                    <h1 className="text-2xl font-semibold text-dark mt-3 mb-2">Physical</h1>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Aches and pains</li>
                    <li>Diarrhea or constipation</li>
                    <li>Nausea, dizziness</li>
                    <li>Chest pain, rapid heartbeat</li>
                    <li>Loss of sex drive</li>
                    <li>Frequent colds</li>
                </ul>
            </section>

            {/* Section: Causes */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-dark mb-2">What Causes Stress?</h2>
                <p className="text-gray-700 leading-relaxed">
                    Stress can be triggered by external pressures (like work, relationships, or financial strain) or internal conflicts (such as self-criticism or uncertainty). Life changes, traumatic experiences, or daily hassles can all contribute to how stress builds up.
                </p>
            </section>

            {/* Section: How to Help Yourself */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-dark mb-2">How Can You Help Yourself?</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Practice mindfulness, deep breathing, or meditation</li>
                    <li>Exercise regularly and maintain a healthy diet</li>
                    <li>Talk to friends, family, or a mental health professional</li>
                    <li>Set boundaries and take breaks when needed</li>
                    <li>Keep a journal or try creative outlets to express feelings</li>
                </ul>
            </section>

            {/* ✅ New Section: How to Help Someone Else */}
            <section>
                <h2 className="text-2xl font-semibold text-dark mb-2">How Can You Help Someone Else?</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Listen without judgment and be patient</li>
                    <li>Let them know it’s okay to feel stressed or overwhelmed</li>
                    <li>Encourage healthy coping methods (e.g., rest, breathing, therapy)</li>
                    <li>Check in regularly and remind them they're not alone</li>
                    <li>Help them access professional support if needed</li>
                </ul>
            </section>
        </div>
    );
};

export default StressPage;
