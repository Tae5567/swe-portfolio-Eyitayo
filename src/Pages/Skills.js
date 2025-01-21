import React from "react";
import { skillDetails } from "../Details";

function Skills() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Skills
        </h1>
        <br/>
        <br/>
      </section>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 pt-6">
        {Object.entries(skillDetails).map(([skill, icon]) => (
          <div key={skill} className="flex flex-col items-center text-center">
            <img
              src={icon}
              alt={skill}
              title={skill}
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
            />
            <span className="mt-2 font-sans text-sm font-medium">{skill.charAt(0).toUpperCase() + skill.slice(1)}</span>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Skills;


