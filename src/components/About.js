import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from 'react-icons/rx';


function About() {
    
  const slides = [
    {
      url: "/images/my_pic.jpg",
    },
    {
      url: "/images/ilovecoding.webp",
    },
    {
      url: "/images/notes-pic.webp",
    },
    {
      url: "https://images.pexels.com/photos/12263647/pexels-photo-12263647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length -1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);

  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }



  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white no-underline">
            Hi, I'm Cory.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            Hello, my name is Cory Bowman. I have a beautiful 14-year-old son, a
            loving family and girlfriend that supports me. Additionally, I am a
            self-taught software developer.
          </p>
          <p className="mb-8 leading-relaxed">
            I started teaching myself how to code roughly one year ago while
            working a full-time job.
          </p>
          <p className="mb-8 leading-relaxed">
            I've went through many challenges along the way but one thing has
            never changed, my ability to always push through the doubts and
            restrictions that we constantly place on ourselves. 
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="transition duration-500 ease-in-out inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 transform hover:-translate-y-1 hover:scale-110 rounded text-lg"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="transition duration-500 ease-in-out ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white transform hover:-translate-y-1 hover:scale-110 rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>

        <div className="lg:max-w-md max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          ></div>

          <div>
            <BsChevronCompactLeft
              onClick={prevSlide}
              size={30}
              className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer"
            />
          </div>

          <div>
            <BsChevronCompactRight
              onClick={nextSlide}
              size={30}
              className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer"
            />
          </div>
          <div className="flex top-4 justify-center py-2">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer"
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About