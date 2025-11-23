

import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Lorem Ipsum is simply dummy text dummy text",
    subtitle: "Lorem Ipsum is simply dummy text",
    img: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg",
  },
  {
    id: 2,
    title: "High Quality Lab Tests",
    subtitle: "Your trusted health partner",
    img: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  },
  {
    id: 3,
    title: "Accurate Results, Fast",
    subtitle: "We value your health",
    img: "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg",
  },
];

const HeroHm = () => {
  const [current, setCurrent] = useState(0);

  // Auto scroll every 3s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <section className="w-full relative my-10 py-8">
      <div className="max-w-9xl mx-auto relative overflow-hidden rounded-3xl shadow-lg h-[500px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 flex flex-col md:flex-row items-center transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Left Content */}
            <div className="flex-1 bg-blue-500 text-white h-130 p-8 flex flex-col justify-center rounded-l-3xl">
              <p className="text-sm">{slide.subtitle}</p>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                {slide.title}
              </h1>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 w-fit">
                Book A Blood Test <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Image */}
            <div className="flex-1">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-[500px] object-cover rounded-r-3xl"
              />
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-20"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2  bg-white p-2 rounded-full shadow hover:bg-gray-100 z-20"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === current ? "bg-yellow-500" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroHm;
