import React from 'react'
import projects from '../Data/Project'
import { useNavigate, useParams } from 'react-router-dom'

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find(
  (item) => item.id === Number(id)
);
if (!project) {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">
    <h1 className="text-3xl font-bold">
      Project Not Found
    </h1>
  </div>
  );
}
  return (
    <div className='min-h-screen pt-24 px-6 py-10'>
        <div className='max-w-6xl mx-auto'>
            <button onClick={()=>navigate('/projects')}
            className='mb-8 flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 font-medium transition hover:bg-gray-100'>
                  ← Back to Projects
                </button>
            <h1 className="text-4xl font-bold mb-8">
               {project.title}
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className='self-start rounded-2xl  border border-gray-200 shadow-2xl'>
                    <img src={project.image}
                    alt={project.title}
                    className='w-full h-64 object-cover transition-transform duration-500 hover:scale-105 rounded-2xl'
                    />
                </div>

                <div className='flex flex-col gap-6'>
                    <div>
                        <h2 className='text-2xl font-semibold mb-2'>
                            Description
                        </h2>
                        <p className="text-gray-600 leading-7">
                            {project.description}
                        </p>
                    </div>
                    <div>
                     <h2 className="text-2xl font-semibold mb-3">
                           Technologies
                     </h2>

                   <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, index) => (
                     <span
                       key={index}
                       className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium">
                           {tech}
                    </span>
                   ))}
              </div>
               </div>

               <div>
                    <h2 className="text-2xl font-semibold mb-3">
                      Features</h2>
                  <ul className="space-y-2">
                   {project.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                   ✅ {feature}
                </li>
            ))}
                </ul>
               </div>

                   <div className="flex flex-wrap gap-4">
                       <a href={project.live} target="_blank" rel="noopener noreferrer"
                       className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                          Live Demo
                       </a>
                   <a href={project.github} target="_blank" rel="noopener noreferrer"
                     className="px-6 py-3 rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-900 transition">
                         GitHub
                   </a>
                   </div>

                </div>
            </div>

        </div>
      
    </div>
  )
}

export default ProjectDetails
