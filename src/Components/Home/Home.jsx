import React from 'react'
import avatarImg from "../../assets/profile-pic.png";
import TextChange from '../TextChange';
const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
    <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange/>
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
        <h1 className="welcome-message">Welcome to my portfolio.</h1>
        
        <p className="description">
          I'm a passionate <span className="highlight">Software Developer</span> from Maharashtra, India, 
          dedicated to creating impactful digital experiences. My journey combines creativity with technical expertise, 
          resulting in smooth, user-focused web solutions.
        </p>

        <p className="description">
          With proficiency in technologies such as <span className="highlight">Java, Spring Boot, HTML, CSS, JavaScript, and React</span>, 
          I build applications that are both functional and engaging.
        </p>

        <p className="description">
          Explore my portfolio to see how my skills, projects, and experiences have shaped my path, and discover the work 
          that fuels my drive to innovate and grow in software development.
        </p> 
        
        </p>
        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
      </div>
      <div>
        <img className="w-50 h-50 md:w-80 md:h-80 object-cover rounded-full" src={avatarImg} alt="" />
      </div>
    </div>
  )
}

export default Home
