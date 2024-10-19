// import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="my-5 md:py-14">
      <h1 className="mb-10 text-center text-4xl font-bold md:mb-24">SKILLS</h1>
      <div className="flex flex-wrap justify-center gap-10 md:mx-64 md:gap-20">
        <div>
          <img
            className="h-14 md:h-28"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
            alt="logo"
          />
          <p className="pt-3 text-center font-medium">PYTHON</p>
        </div>
        <div>
          <img
            className="h-14 md:h-28"
            src="https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png"
            alt="logo"
          />
          <p className="pt-3 text-center font-medium">AWS</p>
        </div>
        <div>
          <img
            className="h-14 md:h-28"
            src="https://img.icons8.com/?size=512&id=38553&format=png"
            alt="logo"
          />
          <p className="pt-3 text-center font-medium">SELENIUM</p>
        </div>
        <div>
          <img
            className="h-14 md:h-28"
            src="https://images.ctfassets.net/o7xu9whrs0u9/11D70lXfTtWpTXYVFOskn5/f65eb2cbe6719710a8cac5aab2189f7c/docker-new.png"
            alt="logo"
          />
          <p className="pt-3 text-center font-medium">DOCKER</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
