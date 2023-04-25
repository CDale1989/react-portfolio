import React from 'react'

function About() {
  return (
    <section id="about page">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-xol md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white font-sans">
            About me
            <br className="hidden lg:inline-block" />
            Learn about my journey below.
          </h1>
          <p className="mb-8 leading-relaxed">
            Hello, my name is Cory Bowman. I am 33 years old and I have a
            beautiful 14-year-old son, a loving family and girlfriend that
            supports me. Additionally, I am a self-taught software developer.
          </p>
          <div className="flex justify-center">
            <a
              href="contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Reach out to me with questions about my portfolio.
            </a>
            <a
              href="projects"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Check out some of my projects.
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img 
            className="object-cover object-center rounded"
            alt="my pic"
            src={process.env.PUBLIC_URL + '/images/my_pic.jpg'} 
            />
        </div>
      </div>
    </section>
  );
}

export default About