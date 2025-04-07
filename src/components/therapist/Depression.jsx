import React from 'react';
import Navbar from '../Navbar/Navbar';

const Depression = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-4xl font-bold text-primary mb-6">Understanding Depression</h1>

        <p className="mb-6 text-lg">
          Depression is more than just feeling sad or going through a rough patch. It’s a serious mental health condition that affects how you feel, think, and handle daily activities.
          The good news is, it’s treatable, and you're not alone.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-2">What is Depression?</h2>
          <p>
            Depression is a mood disorder that causes a persistent feeling of sadness and loss of interest. It can interfere with your ability to function at work and at home.
            It’s not a sign of weakness, and it’s not something you can just “snap out of.”
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-2">Signs & Symptoms</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Persistent sadness or low mood</li>
            <li>Loss of interest in hobbies or activities</li>
            <li>Fatigue or low energy</li>
            <li>Changes in sleep or appetite</li>
            <li>Difficulty concentrating</li>
            <li>Feelings of guilt, worthlessness, or helplessness</li>
            <li>Thoughts of self-harm or suicide</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-2">What Causes Depression?</h2>
          <p>
            Depression can be caused by a combination of biological, psychological, and social factors. Common causes include:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Family history of mental health conditions</li>
            <li>Major life changes, trauma, or stress</li>
            <li>Certain medical conditions and medications</li>
            <li>Imbalance in brain chemistry</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-2">How Can You Help Yourself?</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Talk to someone you trust — a friend, family member, or counselor</li>
            <li>Seek professional help — therapy or a mental health professional</li>
            <li>Engage in regular physical activity and eat a balanced diet</li>
            <li>Practice mindfulness, journaling, or breathing exercises</li>
            <li>Be kind to yourself — healing takes time</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-2">How Can You Help Someone Else?</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Listen without judgment — sometimes just being there helps</li>
            <li>Encourage them to talk to a mental health professional</li>
            <li>Educate yourself about depression</li>
            <li>Check in regularly — even a simple message makes a difference</li>
            <li>Be patient — healing doesn’t happen overnight</li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Depression;
