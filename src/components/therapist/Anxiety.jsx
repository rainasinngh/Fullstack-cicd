import React from 'react';
import Navbar from '../Navbar/Navbar';


const AnxietyPage = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-4xl mx-auto px-6 py-10">
                <h1 className="text-3xl font-bold text-primary mb-6">Understanding Anxiety</h1>

                {/* Section: Awareness */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-dark mb-2">Mental Health Awareness for Anxiety</h2>
                    <p className="text-gray-700 leading-relaxed">
                    Anxiety is a feeling of fear, worry, or nervousness when one is about to do something challenging. Everybody experiences anxiety across different situations, and it is a normal experience. However, anxiety becomes a medical condition when it is prolonged and starts to impact the way one would normally perform ordinary tasks. It can start affecting your sleep, your ability to work, and your relationships.
                    </p>
                </section>

                {/* Section: Signs & Symptoms */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-dark mb-2">Signs & Symptoms of Anxiety</h2>
                    <h1 className="text-xl font-semibold text-dark mb-2 mt-4">You may be feeling</h1>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Excessive fear or worry</li>
                        <li>A sense of impending danger</li>
                        <li>Restlessness</li>
                        <li>Nervous or tensed</li>
                        <li>Agitated</li>
                        <li>Intimidated with social interactions</li>
                        <li>Detached from people</li>
                    </ul>

                    <h1 className="text-xl font-semibold text-dark mt-3 mb-2">You may be experiencing</h1>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Sleep problems</li>
                        <li>Shortness of breath/rapid breathing</li>
                        <li>Heart palpitations</li>
                        <li>Nausea/dizziness</li>
                        <li>Sweating</li>
                        <li>Headaches or stomach aches</li>
                        <li>Problem with concentration</li>
                    </ul>
                    <h1 className="text-xl font-semibold text-dark mt-3 mb-2">You may be thinking</h1>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Everything’s going to go wrong</li>
                        <li>I can’t control the way I feel</li>
                        <li>I can’t focus on anything</li>
                        <li>Everyone is looking at me</li>
                        
                    </ul>
                    
                </section>

                {/* Section: Causes */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-dark mb-2">What Causes Anxiety?</h2>
                    <p className="text-gray-700 leading-relaxed">
                    Anxiety can stem from a complex interplay of factors, including genetic predisposition, environmental stressors, brain chemistry imbalances, and past experiences, with trauma and chronic stress being significant contributors to its development. It can also be triggered by specific situations, such as public speaking or social interactions, and can manifest in various forms, including generalized anxiety disorder (GAD), panic disorder, and social anxiety disorder.
                    </p>
                </section>

                {/* Section: How to Help Yourself */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-dark mb-2">How Can You Help Yourself?</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Having become aware that you have stress, the next step is to know that it can be managed. Practicing self-care is a good step to begin with. Incorporating certain activities into your daily routine can help make stress management part of your lifestyle. There are many fun and calming activities that will help relieve stress if done consistently. Adopting strategies for managing stress in the workplace – for example, prioritizing tasks, managing time, taking breaks – is also an important part of overall stress management.
                    </p>
                    <h1 className="text-xl font-semibold text-dark mt-3 mb-2">Engage in a relaxing activity</h1>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Practice mindfulness, deep breathing, or meditation</li>
                        <li>listen to your favorite songs</li>
                        <li>Keep a journal or try creative outlets to express feelings</li>
                    </ul>
                    <h1 className="text-xl font-semibold text-dark mt-3 mb-2">Practice yoga and meditation</h1>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Regular yoga and meditation can help alleviate stress</li>
                        <li>Yoga helps in improving flexibility, strength, and balance</li>
                        <li>Yoga and meditation can help improve mental clarity</li>
                    </ul>
                    <h1 className="text-xl font-semibold text-dark mt-3 mb-2">Exercise regularly</h1>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Even 30 minutes of walking on a regular basis can improve your health</li>
                        <li>Exercise releases endorphins, which can improve mood</li>
                        <li>Exercise can help you sleep better</li>
                    </ul>
                    <h1 className="text-xl font-semibold text-dark mt-3 mb-2">Eat a balanced diet</h1>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Eat a variety of foods from all food groups</li>
                        <li>Limit caffeine and sugar intake</li>
                        <li>Stay hydrated by drinking plenty of water</li>
                    </ul>
                    <h1 className="text-xl font-semibold text-dark mt-3 mb-2">Organize and prioritize tasks</h1>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Creating a daily ‘to-do list' helps to visualize what needs to be done and prioritize the things that are important, as against those that are not so important</li>
                        <li>Break tasks into smaller, manageable steps</li>
                        <li>Set realistic goals and deadlines</li>
                    </ul>
                    <h1 className="text-xl font-semibold text-dark mt-3 mb-2">Talk to Someone</h1>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Talk to people you trust and can be honest with. They are the ones who are likely to provide emotional support and practical help</li>
                        <li>Talking to a therapist or counselor can help you learn how to manage stress</li>
                        <li>Consider joining a support group or community</li>
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
                        <li>Help them recognize symptoms</li>
                        <li>Help them access professional support if needed</li>
                    </ul>
                </section>
            </div>
        </>
    );
};

export default AnxietyPage;
