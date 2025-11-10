import React from 'react'

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 px-6'>
        <div className='max-w-3xl bg-white shadow-lg rounded-2xl p-8'>
            <h1 className='text-4xl font-bold text-blue-600 mb-6 text-center'>About</h1>
            <p className='text-gray-700 text-lg eading-relaxed mb-4'>
                Hi,My Name : <span className='font-semibold'>Parmar Janak Narendrabhai</span>  
               I have Complated <span className='font-semibold'>
                 10+12,BA(external),ITI-FITTER</span>
            </p>
            <p className='text-gray-700 text-lg leading-relaxed mb-4'>
                I Have<span className='font-semibold'>
                    2 Year Of Experience </span> At <span className='font-semibold'>Steel Cast Pvt.Ltd</span>
                In The Maintenance Department
                </p>
            <p className='text-gray-700 text-lg leading-relaxed'>
                My career objective is to continuously learn and grow as a professional,  
          and to contribute my skills in<span className='font-semibold'>
            MERN Stack Devlopment </span>And Tools Like,<span className='font-semibold'>Postman</span>
            </p>
        </div>
    </div>
  );
}

