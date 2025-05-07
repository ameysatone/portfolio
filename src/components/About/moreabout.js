import React from 'react';

const MoreAbout = () => {
  const certificates = [
    {
      title: "Hackathon",
      description: "participated in a hackathon and were a part of top 10 in the national level competition held at Aissms pune.",
      image: "/assects/hackaissms.png",
      link: "/assects/hackaissms.png"
    },
    {
      title: "Speech competition",
      description: "Participated in a tech speech competition and secured first place in the competition.",
      image: "/assects/speech.png",
      link: "/assects/speech.png"
    },
    {
      title: "Cloud Computing",
      description: "completed a course on Cloud Computing (Foundation, Architecture)both.",
      image: "/assects/cloud.png",
      link: "/assects/cloud.png"
    },
  ];

  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-800 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        My Certificates and Achievements
      </h1>

      <div className="space-y-6">
        {certificates.map((certificate, index) => (
          <a
            key={index}
            href={certificate.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105 flex flex-col sm:flex-row items-center cursor-pointer">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-32 h-32 object-contain mb-4 sm:mb-0 sm:mr-6 rounded-md border border-gray-300 dark:border-gray-600"
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{certificate.title}</h2>
                <p className="text-gray-700 dark:text-gray-300">{certificate.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MoreAbout;
