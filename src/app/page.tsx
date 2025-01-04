/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

export default function Home() {
  const hero = [
    {
      title: "START YOUR SUCCESS JOURNEY TO FINANCIAL FREEDOM",
      description: "Grab the opportunity in the new Digital Era!",
      images: ["images/ss-1.jpg", "images/ss-2.jpg", "images/ss-3.jpg"]
    },
    {
      title: "TRAVEL FOR FREE? YOU GET 3 DESTINATIONS EVERY YEAR!!",
      description: "Achieve your target and travel together with us!",
      images: ["images/ss-2.jpg", "images/ss-3.jpg", "images/ss-1.jpg"]
    },
    {
      title: "WORRIED TO START? WORK TOGETHER WITH SMART SOLUTION!",
      description: "Get the best support system for FREE!",
      images: ["images/ss-3.jpg", "images/ss-2.jpg", "images/ss-1.jpg"]
    }
  ];

  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % hero[currentHeroIndex].images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + hero[currentHeroIndex].images.length) % hero[currentHeroIndex].images.length
    );
  };

  return (
    <div className="font-sans">
      {/* Navbar */}
      <header className="bg-teal-600 text-white">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-white">Smart Solution</span>
          </div>
          {/* Menu */}
          <nav className="space-x-6">
            <a href="#" className="hover:text-gray-200">Home</a>
            <a href="about" className="hover:text-gray-200">Business</a>
            <a href="#" className="hover:text-gray-200">Products</a>
            <a href="#" className="hover:text-gray-200">About us</a>
          </nav>
          {/* Search */}
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1 rounded-full text-black outline-none"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${hero[currentHeroIndex].images[currentImageIndex]})` }}
      >
        <div className="container mx-auto flex items-center justify-evenly h-full px-6">
          {/* Text */}
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-extrabold leading-tight">
              {hero[currentHeroIndex].title}
            </h1>
            <p className="mt-4 text-lg">{hero[currentHeroIndex].description}</p>
          </div>
          {/* Carousel */}
          <div className="mt-12 w-full max-w-md mx-auto">
            <div className="relative flex items-center">
              <button
                className="absolute left-0 bg-white p-2 rounded-full shadow-md"
                onClick={handlePrev}
              >
                &lt;
              </button>

              {/* Carousel Items */}
              <div className="w-full h-64 bg-gray-200 mx-4 rounded-md flex items-center justify-center">
                <img
                  src={hero[currentHeroIndex].images[currentImageIndex]}
                  alt={`Slide ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              <button
                className="absolute right-0 bg-white p-2 rounded-full shadow-md"
                onClick={handleNext}
              >
                &gt;
              </button>
            </div>

            <div className="flex justify-center mt-4 space-x-2">
              {hero[currentHeroIndex].images.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentImageIndex ? "bg-teal-500" : "bg-gray-300"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {hero.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentHeroIndex ? "bg-teal-500" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </section>
    </div>
  );
}
