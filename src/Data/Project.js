import ChatApp from '../assets/whatshapp.png';
import Netflix from '../assets/netflix.png';
const projects = [
    {
        id: 1,
        title:"real time chat-App clone",
        image:ChatApp,
        shortDescription:"A real-time chat application built using the MERN Stack.",
        description:'A production-ready, feature-rich real-time communication platform engineered to replicate the modern desktop and mobile web experiences of WhatsApp. Built using the MERN stack and web communication protocols, this application features a seamless chat dashboard with complete mobile-responsiveness. The platform prioritizes lightweight frontend delivery, efficient data fetching, and an intuitive user experience with dedicated dark and light mode aesthetics.',
        github:'https://github.com/parmarjanak9714/Chat-App',
        live:'https://chat-janakparmar.vercel.app/',
        technologies:[
            "React.js",
            "Node.js",
            "Express.js",
             "MongoDB Atlas",
            "Socket.io",
            "Tailwind CSS",
            "JSON Web Tokens (JWT)",
            "React Router",
            "React Hot Toast",
            "Vercel",
            "Render"
         ],

        features:[
            'Passwordless OTP Onboarding',
            'Smart Conditional User Routing',
            'Persistent Bottom Menu (Mobile Web Optimization',
            'Contextual Media-Input Controls',
            'Dynamic First-Letter User Avatars',
        ]
    },
    {
        id: 2,
        title:"NetFlix clone",
        image:Netflix,
        shortDescription:"A real-time NetFlix Clone application built using the MERN Stack.",
        description:
        'A high-performance full-stack video streaming platform architecture inspired by real Netflix UI/UX configurations. Implemented dynamic hero-banner state engines that rotate fresh trending assets automatically on every render, synchronized alongside fluid multi-genre media galleries that query structural live catalogs using the TMDB API. Includes embedded trailer portal interfaces that instantly track, configure, and stream native movie previews directly from YouTube into a responsive viewport overlay.',
        github:'https://github.com/parmarjanak9714/netflix-mern-clone',
        live:'https://netflix-mern-clone-two.vercel.app/',
        technologies:[
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB Atlas",
            "TMDB API",
            "Tailwind CSS",
            "SCSS / Sass",
            "React Router",
            "Vercel",
            "Render"
        ],
        features:[
            'Hero Banner Engine: Automatic rendering of trending movie title screens on reload',
            'Genre-Categorized Rows: Fluid scrollable movie panels synced through live TMDB APIs.',
            'Instant Video Portals: Overlay popups playing official movie previews from YouTube.',
            'Global App Filtering: Real-time content queries indexing titles, genres, and cast files.',
            'Personal Watchlists: Active profile collection nodes saved on secure MongoDB collections.'

        ]
    }
]
export default projects;