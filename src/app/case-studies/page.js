import React from 'react';
import "./style.css";
import Image from 'next/image';
import madhu from "../../../public/work/madhu.png";

const page = () => {
  return (
    <main className='case-studies p-2'>

      <header>
        <h2 className="w-100">Case Studies</h2>
        <h1 className="w-100">Project Heading: Description about the project  </h1>
      </header>

      <picture className=''>
        <source media='(min-width: 601px)' srcSet='https://placehold.co/1920x600' />
        <source media='(max-width: 600px)' srcSet='https://placehold.co/1000x800' />
        <img src={madhu} />
      </picture>

      <section className="project-overview">
        <h2>Project Overview</h2>
        <ol className='project-keypoints'>
          <li>Item 1 description</li>
          <li>Item 2 description</li>
          <li>Item 3 description</li>
          <li>Item 4 description</li>
        </ol>

        <div className='project-brief'>
          <p>Write about the project. Write about the project. Write about the project. Write about the project. Write about the project. Write about the project. Write about the project. Write about the project. Write about the project. Write about the project. Write about the project. Write about the project. Write about the project. Write about the project. Write about the project. Write about the project. Write about the project. Write about the project. Write about the project. Write about the project. Write about the project. Write about the project. Write about the project. Write about the project. </p>
        </div>
        
      </section>

      <picture className='project-outcomes'>
        <source media='(min-width: 601px)' srcSet='https://placehold.co/1920x600' />
        <source media='(max-width: 600px)' srcSet='https://placehold.co/1000x800' />
        <img src={madhu} />
      </picture>
    </main>
  );
};

export default page;
