import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-lg p-4 shadow-sm bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left text-lg font-medium flex justify-between items-center transition-colors duration-300 ${
          isOpen ? 'text-teal-700' : 'text-black'
        }`}
      >
        {question}
        <span
          className={`transition-transform duration-300 text-2xl ${
            isOpen ? 'rotate-180 text-teal-700' : 'rotate-0'
          }`}
        >
          {isOpen ? '−' : '+'}
        </span>
      </button>

      <div className={`faq-answer mt-2 text-gray-600 ${isOpen ? 'open' : ''}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export const Faqs = () => {
  const faqs = [
    {
      question: 'What is the best time to visit Dubai?',
      answer:
        'The best time to visit Dubai is the winter months as the summer season can get a little hot and sweaty. These months are from November to February with the temperature range of 19 degrees Celsius and 25 degrees Celsius.',
    },
    {
      question: 'What is the temperature overview in Dubai?',
      answer:
        'The average temperatures of the four seasons in Dubai are as follows: - January is the coolest month - February when it gets a little warmer - In March, the humidity increases - The April month is hotter and hotter towards the end - It has been found that temperatures in May exceed 35 Degrees Celsius - June is considered as one of the most hottest months - July and August are hot and humid with the highest temperature going 45 Degrees Celsius - September, October and May to June are hot but kind of bearable. - From November to March, you experience mild cold evenings.',
    },
    {
      question: 'What are the places that we can visit in Dubai?',
      answer:
        'There are several famous landmarks in Dubai that one can visit. To name a few, they are Dubai Museum, Burj Al Arab, Jumeirah Beach and Mosque, Burj Khalifa, The Palm Islands, Dubai Mall, Souks and Atlantis Hotel.',
    },
    {
      question: 'What is the appropriate dress to travel in Dubai?',
      answer:
        'There are no such restrictions for dress codes in Dubai. However, if you are visiting religious places, you need to cover yourself from top to bottom with no little body part to be excessive. Make sure that whatever you wear, reaches a minimum to your knee.',
    },
    {
      question: 'What if we visit during Ramadan?',
      answer:
        'As it is a festive season, it is certainly the best time to visit Dubai and explore its cultural heritage. Some of the places that you can visit are the night market, Alserkal Avenue, and other tourist attractions.',
    },
    {
      question: 'Where to eat in Dubai?',
      answer:
        'Dubai has all the food delicacies and cuisines to eat from. To name a few, you can eat at Pierchic, Eauzone, La Petite Maison, Nathan Outlaw Mahara, Nobu, Thiptara, Indigo by Vineet and many more.',
    },
    {
      question: 'What are some tips when we are visiting Dubai?',
      answer:
        '- Carry sunscreen, sunglasses, hats, light jackets, scarves and comfortable clothes. - Do not at for last-minute bookings, book advance to also enjoy offers and discounts. - If you are visiting in winter, book the restaurants beforehand to avoid long queues. - Public display of affection (PDA) is prohibited in Dubai. - The working days vary a little in Dubai. There Fridays and Saturdays are considered as weekends and Sunday is a working day, so advise you to plan accordingly. - It does not allow public smoking and drinking. There are designated spaces for it. - Follow the dress code in the religious places. - During the pictures of others, ask for permission beforehand. - Be respectful during Ramadan season, respect the Islamic rules. - It is cost effective to hire a taxi in the city of lights.',
    },
    {
      question: 'What sightseeing packages can we book with Citytour?',
      answer:
        '- Abu Dhabi City and Ferrari World Tickets - Abu Dhabi & Louvre Museum - Al Ain City Tour - Hatta Mountain Tour from Dubai - Sheikh Zayed Mosque Tour - Fujairah East Coast Tour - Full Day Dubai City',
    },
    {
      question: 'Are there any Desert Safari Tours?',
      answer:
        'Yes, we do provide desert safari tours. You can book a morning, evening, sunrise, or overnight session of Desert Safari. You can also enjoy camel rides, red dune safari and Jeep Safari Dubai.',
    },
    {
      question: 'Can we prebook the tours?',
      answer:
        'Yes, pre-booking is always available and for sure the best way to book the tours which will also give you access to limited-time offers and discounts.',
    },
    {
      question: 'Do the packages include water activities?',
      answer:
        'Yes, we do provide water activity packages, you can book Atlantis Water Park tickets, Yas Waterworld, Jet Ski and Dhow Cruise.',
    },
    {
      question: 'What are some adventure tickets that we can book?',
      answer:
        'You can book XLine Dubai, Skydiving tickets, Ferrari World, Warner World and Desert Safaris which will add thrill and adventure to your trip.',
    },
  ];

  return (
    <div className="w-full p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl text-teal-800 font-bold text-center mb-10">Dubai FAQs</h1>
      <div className="space-y-4 faq">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};
