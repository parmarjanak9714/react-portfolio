import React from "react";
import { FaExternalLinkAlt,FaGithub } from "react-icons/fa";

// Change projects here: add new projects or remove existing ones by editing this PROJECT array
const PROJECT =[
    // Example: Remove this project by deleting this object
    {
        title:"Food Ordering Website",
        desc:"A modern single-page food ordering website with login,menu,and cart features built using HTML,CSS,JAVASCRIPT,AND JQUERY.",
        Image:"/Projects/food-website.png",
        Link:"#"
    },
    // Example: Keep this project or remove by deleting this object
    {
        title:"Login& Signup page",
        desc:"A modern and responsive login & signup page with background images, hover effects, and real website-like UI built using HTML, CSS, and JavaScript",
        Image:"/Projects/insta_page.png",
        Link:"#"

    },
    // Add new projects here: copy the structure above and fill in title, desc, Image, Link
];

export default function Projects(){
    return(
        <main className="min-h-[calc(100vh-64px)]py-16 bg-gray-50">
            <div className="container max-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-8">MY PROJECTS</h2>
                <div className="grid md:grid-cols-2 gap-8">{PROJECT.map(({title,desc,Image,Link})=>(
                    <div key={title} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
                        <img src= {Image} alt={title} className="w-full h-64 object-cover"/>
                        <div className="p-5">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
                            <p className="text-gray-600 mb-4">{desc}</p>
                            <a href={Link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline font-medium">VIEW PROJECT</a>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </main>
    )
}