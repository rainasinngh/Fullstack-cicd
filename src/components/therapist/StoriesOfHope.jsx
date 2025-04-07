import React from 'react';
import Navbar from '../Navbar/Navbar';


const stories = [
    
    {
        name: "Aarav's Journey",
        quote: "“Therapy helped me rediscover peace within myself.”",
        description: "After years of battling anxiety in silence, Aarav reached out for professional help. Through therapy and support from friends, he found ways to manage his thoughts and feel empowered again.",
    },
    {
        name: "Meera's Breakthrough",
        quote: "“It’s okay to ask for help. You are not alone.”",
        description: "Meera faced overwhelming stress balancing her career and family. She opened up to a support group and learned that self-care and boundaries were key to her healing journey.",
    },
    {
        name: "Rohan's Resilience",
        quote: "“Speaking out was the bravest thing I’ve ever done.”",
        description: "Rohan struggled with depression during college. A friend encouraged him to speak to a counselor, which became the turning point in his recovery.",
    },
    {
        name: "Sanya's New Beginning",
        quote: "“I finally feel in control of my emotions.”",
        description: "Sanya lived with emotional outbursts and panic attacks for years. With the help of a therapist and mindfulness techniques, she learned to regulate her emotions and feel safe again.",
    },
    {
        name: "Kabir's Comeback",
        quote: "“I was lost, but I found strength in community.”",
        description: "After losing his job during the pandemic, Kabir’s confidence collapsed. Volunteering with a mental health NGO gave him purpose and connection that slowly helped him heal.",
    },
    {
        name: "Anika's Voice",
        quote: "“Journaling helped me speak when I couldn't find the words.”",
        description: "Struggling with social anxiety, Anika began writing her feelings daily. What started as self-expression became a form of self-therapy that led her to seek professional help.",
    },
    {
        name: "Vikram's Turning Point",
        quote: "“Rock bottom taught me how to rebuild.”",
        description: "Vikram battled substance abuse tied to unresolved grief. With rehab and counseling, he began to recover and now mentors others going through similar pain.",
    },
    {
        name: "Tara's Triumph",
        quote: "“I didn’t have to fight my battles alone.”",
        description: "Tara struggled silently with postpartum depression. Opening up to her partner and joining a support group gave her the strength to heal and enjoy motherhood again.",
    },
    {
        name: "Dev's Discovery",
        quote: "“Self-compassion changed everything for me.”",
        description: "Dev always blamed himself for not being 'strong enough.' Therapy taught him that healing starts with kindness toward yourself—and that was the beginning of real change.",
    },
];


const StoriesOfHope = () => {
    return (
      <>
        <Navbar />
  
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-primary mb-4 text-center">Stories of Hope</h1>
          <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
            Real stories from real people who chose to seek help, speak up, and find healing. Their journeys remind us that recovery is possible and hope is real.
          </p>
  
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((story, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-xl font-semibold text-primary mb-2">{story.name}</h2>
          <p className="italic text-gray-600 mb-2">{story.quote}</p>
          <p className="text-gray-700 text-sm">{story.description}</p>
        </div>
      ))}
          </div>
        </div>
      </>
    );
  };
  
  export default StoriesOfHope;