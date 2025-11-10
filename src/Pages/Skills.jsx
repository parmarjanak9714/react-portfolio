import React from "react";
import{FaHtml5,FaCss3Alt,FaJs,FaReact,FaNodeJs,FaServer}from"react-icons/fa";
import{SiExpress,SiMongodb,SiGithub,SiTailwindcss,SiPostman,SiMysql}from"react-icons/si";

const SKILLS =[
    {name:"HTML",icon:FaHtml5,color:"text-orange-500"},
    {name:"CSS",icon:FaCss3Alt,color:"text-blue-500"},
    {name:"JavaScript",icon:FaJs,color:"text-yellow-400"},
    {name:"React",icon:FaReact,color:"text-sky-400"},
    {name:"Nodejs",icon:FaNodeJs,color:"text-green-600"},
    {name:"Expressjs",icon:SiExpress,color:"text-gray-700"},
    {name:"MongoDB",icon:SiMongodb,color:"text-emerald-600"},
    {name:"MySQL",icon:SiMysql,color:"text-blue-700"},
    {name:"Git",icon:SiGithub,color:"text-gray-800"},
    {name:"Taiwindcss",icon:SiTailwindcss,color:"text-sky-500"},
    {name:"Postman",icon:SiPostman,color:"text-orange-400"},
    {name:"REST APis",icon:FaServer,color:"text-indigo-600"},
];

export default function Skills(){
    return(
        <main className="min-h-[calc(100vh-64px)]py-16 bg-gray-50">
            <div className="container-app">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-8">My Skills</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {SKILLS.map(({name,icon:Icon,color})=>(
                        <div key={name} className="flex flex-col items-center justify-center bg-white p-5 rounded-xl shadow hover:shadow-lg transform hover:translate-y-1 transition"
                        role="img"
                        aria-label={name}
                        title={name}>
                            <div className={`w-20 h-20 flex items-center justify-center rounded-full bg-gray-100 mb-3 ${color}`}>
                                <Icon className ={`w-10 h-10,${color}`} aria-hidden ="true"/>
                            </div>
                            <span className="text-sm font-medium text-gray-700 text-center">{name}</span>
                        </div>

                    ))}

                </div>
            </div>

        </main>

    );
}