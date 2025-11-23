import { Bolt, Boxes, Chrome, Code, Database, GithubIcon, Instagram, LinkedinIcon, TwitterIcon } from "lucide-react";
import { Certification, Experience, Project, SkillBubble, SkillListDataTypes } from "./Types";

export const SKILLS: SkillBubble[] = [
    { id: 1, name: "Node.js", level: 80, color: "#339933" },
    { id: 2, name: "React.js", level: 85, color: "#339933" },
    { id: 3, name: "Express.js", level: 80, color: "#339933" },
    { id: 4, name: "Next.js", level: 85, color: "#339933" },
    { id: 5, name: "Nest js", level: 80, color: "#339933" },
    { id: 6, name: "MongoDB", level: 90, color: "#339933" },
    { id: 7, name: "SQL", level: 85, color: "#339933" },
    { id: 8, name: "JavaScript", level: 85, color: "#339933" },
    { id: 9, name: "Tailwind CSS", level: 85, color: "#339933" },
    { id: 10, name: "Bootstrap", level: 80, color: "#339933" },
    { id: 11, name: "Java", level: 65, color: "#FCBE7E" },
    { id: 12, name: "PHP", level: 55, color: "#F59E0B" },
    { id: 13, name: "Figma", level: 55, color: "#F59E0B" },
    { id: 14, name: "Photopea", level: 50, color: "#F59E0B" },
    { id: 15, name: "HTML", level: 90, color: "#339933" },
    { id: 16, name: "CSS", level: 90, color: "#339933" },
    { id: 17, name: "Git", level: 80, color: "#339933" },
    { id: 18, name: "Docker", level: 75, color: "#339933" },
    { id: 19, name: "Postman", level: 85, color: "#339933" },
    { id: 20, name: "Kubernetes", level: 55, color: "#F59E0B" },
    { id: 21, name: "Google Cloud", level: 50, color: "#F59E0B" },
    { id: 22, name: "Cursor", level: 80, color: "#339933" },
    { id: 23, name: "Miro", level: 75, color: "#339933" }
];
export const SKILL_LIST_DATA: SkillListDataTypes[] = [
    {
        title: "Programming Languages",
        skills: ["C", "Java", "PHP", "Node.js"],
        icon: <Code />
    },
    {
        title: "Database & Design",
        skills: ["SQL", "MongoDB", "Figma", "Photopea"],
        icon: <Database />
    },
    {
        title: "Web Technologies",
        skills: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Bootstrap"],
        icon: <Chrome />
    },
    {
        title: "Frameworks",
        skills: ["Next.js", "Express.js","Nest js", "React.js"],
        icon: <Boxes />
    },
    {
        title: "Tools",
        skills: ["Git", "Docker", "Postman", "Google Cloud", "Cursor", "Miro"],
        icon: <Bolt />
    }
]
export const PROJECTS: Project[] = [
    {
        id: 1,
        title: "CraftfossLabs",
        description: "CraftfossLabs is an open-source platform built on Next.js. Our main website features an automated blog section and key refinements aimed at enhancing user experience and performance. We've implemented robust SEO strategies using Meta Tags and OG tags to improve visibility. With a seamless integration of MongoDB, Feedback System, and an Admin Panel. The platform is optimized for both security and performance, with backend powered by Node.js and Express JS. Additionally, our deployment pipeline on Vercel is streamlined to minimize conflicts, ensuring smooth CI/CD workflows.",
        image: "/assets/craftfosslabs.png",
        tags: ["NEXT JS", "FRAMER MOTION", "MONGODB", "TAILWIND CSS"],
        url: "http://craftfosslabs.com/"
    },
    {
        id: 2,
        title: "Games Platform",
        description: "Games Arena is a platform that hosts a collection of games built with React.js. The site is optimized for real-time performance and scalability, allowing users to play games effortlessly. Hosted on a VPS, the tools are optimized for real-time performance and scalability, allowing users to integrate them into their applications effortlessly.",
        image: "/assets/Games-Craftfosslabs.webp",
        tags: ["REACT JS", "EXPRESS JS", "MONGODB", "VPS", "PWA"],
        url: "https://games.craftfosslabs.com/"
    },
    {
        id: 3,
        title: "Tools For Professional Developers",
        description: "Tools For Professional Developers is a platform that hosts four powerful applications designed to enhance productivity for developers. These include a Code Share tool with a VS Code-like design for seamless code sharing, a Finance Planner to manage expenses and budgets, a Task Manager featuring drag-and-drop functionality for efficient task management, and a Video Downloader supporting downloads from multiple platforms. Built with React.js, Express.js, and MongoDB, and optimized as a Progressive Web App (PWA), these tools are hosted on a VPS for fast and reliable performance.",
        image: "/assets/Tools.png",
        tags: ["REACT JS", "EXPRESS JS", "MONGODB", "VPS", "PWA"],
        url: "https://tools.craftfosslabs.com/"

    },
    {
        id: 4,
        title: "Study Notion",
        description: "Study Notion is an EdTech platform designed to help students track their academic progress and manage their study schedules. Hosted on Vercel, the platform offers personalized insights and analytics to help students optimize their learning habits. Built with React.js, Express.js, and MongoDB, Study Notion provides a seamless and interactive user experience for effective study management.",
        image: "/assets/StudyNotion.png",
        tags: ["REACT JS", "EXPRESS JS", "MONGODB", "VERCEL"],
        url: "https://pathshala-ruby.vercel.app/"
    }
];
export const EXPERIENCE_DATA: Experience[] = [
    {
        id: 1,
        role: "Web Developer Intern",
        company: "Wooble Software Pvt. Ltd.",
        duration: "Oct 2023 - May 2024",
        description: [
            "Spearheaded the development of a full-stack website, achieving a 25% reduction in response time",
            "Conducted comprehensive testing and optimization of API functionality using Postman, reducing error rates",
            "Initiated the creation of a Community Platform, driving a 45% increase in user engagement and implementing SEO strategies for content indexing on Google Search Console",
            "Collaborated with the team on project deployment through GIT, reducing code conflicts by 35% in the Git Branching and ensuring management on AWS servers"
        ],
        tech: ["React", "Node.js", "Postman", "Git", "AWS", "SEO"]
    },
    {
        id: 2,
        role: "Software Engineer",
        company: "Vis Network Pvt. Ltd.",
        duration: "Oct 2024 - Present",
        description: [
            "Spearheaded the development of a full-stack website, achieving a 25% reduction in response time",
            "Conducted comprehensive testing and optimization of API functionality using Postman, reducing error rates",
            "Initiated the creation of a Community Platform, driving a 45% increase in user engagement and implementing SEO strategies for content indexing on Google Analytics",
            "Collaborated with the team on project deployment through GIT, reducing code conflicts by 35% in the Git Version and ensuring management on AWS servers"
        ],
        tech: ["React", "Node.js", "Postman", "Git", "AWS", "SEO"]
    },
    {
        id: 3,
        role: "Open Source Contributor",
        company: "Craftfosslabs",
        duration: "2025- present",
        description: [
            "Contributed to Craftfosslabs' open-source platform by developing and maintaining open-source packages, extensions, and APIs.",
            "Collaborated with the team to create free tools and resources for developers, including a code-sharing platform, finance planner, and task manager.",
            "Supported the development of free public APIs and contributed to the community with useful resources like roadmaps, tutorials, and guides."
        ],
        tech: ["JavaScript", "Node.js", "React.js", "Tailwind CSS", "MongoDB", "Express.js"]
    }

];
export const CERTIFICATION_DATA: Certification[] = [
    {
        id: 1,
        name: "Mern Stack Certified",
        issuer: "CodeHelp",
        date: "2023",
        description: "Certified in full-stack web development using the MERN stack, mastering MongoDB, Express.js, React.js, and Node.js with industry-level projects.",
        image: "/assets/mern-stack.png",
        credentialId: "C0YPEALK"
    },
    {
        id: 2,
        name: "Basic Python",
        issuer: "Hacker Rank",
        date: "2022",
        description: "Certified in Python fundamentals covering data structures, algorithms, and problem-solving skills for building scalable applications.",
        image: "/assets/python.png",
        credentialId: "BE6DF704F691"
    },
    {
        id: 3,
        name: "Advance SEO",
        issuer: "Tutorial Point",
        date: "Mar 2024",
        description: "Certified in Search Engine Optimization (SEO) strategies including on-page SEO, technical SEO, link building, and analytics tools.",
        image: "/assets/seo.jpg",
        credentialId: "TP-QAREYIK9"
    },
    {
        id: 4,
        name: "Essential SQL",
        issuer: "Linkedin",
        date: "Mar 2024",
        description: "Certified in SQL database management, mastering data querying, relational databases, normalization, and advanced SQL operations.",
        image: "/assets/sql.jpg",
        credentialId: "2370531df1977f673370c86a6db3aa658332183d2ad9060e48f1954541989c76"
    }
];
export const socialIcons = [
    { icon: <GithubIcon />, link: "https://github.com/1sisodiyaji",name: 'Github' },
    { icon: <LinkedinIcon />, link: "https://www.linkedin.com/in/golu-singh/",name: 'Linkedin' },
    { icon: <TwitterIcon />, link: "https://x.com/GoluSin08643603",name: 'Twitter' },
    { icon: <Instagram />, link: "https://www.instagram.com/golu_singh_sisodiya/",name: 'Instagram' },
];
export const AboutMeData ={
    text : 'About Me',
    description : 'I am a Full Stack Developer with a passion for creating innovative and user-friendly web applications. With expertise in React.js, Node.js, and MongoDB, I am dedicated to delivering high-quality solutions that meet the needs of my clients. My goal is to create engaging and interactive experiences that provide value to users and help businesses succeed.',
}