import React from 'react'
import projects from '../Data/Project';
import { useNavigate } from 'react-router-dom';


const Projects = () => {
  const navigate = useNavigate();
  return (
    <section className='w-full py-16 px-4 bg-black text-white pt-28'>
      <div className='max-w-7xl mx-auto text-center'>
        <h1 className='text-5xl font-bold mb-12'>
          My <span className='text-cyan-400'>Project</span>
          </h1>
          <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {projects.map((project)=>(
              <div key={project.id} 
              className='group max-w-sm mx-auto w-full overflow-hidden rounded-2xl border border-gray-700 bg-[#111827] shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl'>
                <img src={project.image}
                alt={project.title}
                className='h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105'/>
                <div className='p-5'>
                <h3 className='text-xl font-bold text-white'>{project.title}</h3>
                <p className='mt-3 text-sm text-gray-400 line-clamp-2'>{project.shortDescription}</p>
                <button onClick={()=>navigate(`/project/${project.id}`)}
                 className='mt-5 w-full rounded-lg bg-blue-600 py-2 text-white transition hover:bg-blue-700'>
                      More Information
                </button>
                  </div>
              </div>
            ))}

          </div>

      </div>


    </section>

  )
}

export default Projects
