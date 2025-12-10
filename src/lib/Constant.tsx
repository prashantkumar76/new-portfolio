import { Bolt, Boxes, Chrome, Code, Database, GithubIcon, Instagram, LinkedinIcon, TwitterIcon } from "lucide-react";
import { Certification, Experience, Project, SkillBubble, SkillListDataTypes } from "./Types";

export const SKILLS: SkillBubble[] = [
    { id: 1, name: "Node.js", level: 80, color: "#339933" },
    { id: 2, name: "React.js", level: 85, color: "#339933" },
    { id: 3, name: "Express.js", level: 80, color: "#339933" },
    { id: 4, name: "C++", level: 85, color: "#339933" },//
    { id: 5, name: ".NetCore ", level: 80, color: "#339933" },//
    { id: 6, name: "MongoDB", level: 90, color: "#339933" },
    { id: 7, name: "SQL", level: 85, color: "#339933" },
    { id: 8, name: "JavaScript", level: 85, color: "#339933" },
    { id: 9, name: "Tailwind CSS", level: 85, color: "#339933" },
    { id: 10, name: "Bootstrap", level: 80, color: "#339933" },
    { id: 11, name: "Java", level: 65, color: "#FCBE7E" },
    { id: 12, name: "C#", level: 55, color: "#F59E0B" },// 
    { id: 13, name: "DSA", level: 65, color: "#FCBE7E" },// 
    { id: 14, name: "OPPs", level: 80, color: "#339933" },// 
    { id: 15, name: "HTML", level: 90, color: "#339933" },
    { id: 16, name: "CSS", level: 90, color: "#339933" },
    { id: 17, name: "Git", level: 80, color: "#339933" },
    { id: 18, name: "LLD", level: 75, color: "#339933" },//
    { id: 19, name: "Postman", level: 85, color: "#339933" },
    { id: 20, name: "Springboot", level: 55, color: "#F59E0B" },
    { id: 21, name: "Google Cloud", level: 50, color: "#F59E0B" },
    
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
        title: "ShoppingGroove-Shopping Cart",
        description: "Built a full-stack e-commerce web application with secure CRUD APIs and JWT-based authentication, ensuring scalable and fault-tolerant data handling via MongoDB and Express.js.",
        image: "/assets/image_1.png",
        tags: ["Node JS", "React JS", "Express JS", "MongoDB", "JavaScript", "Express JS", "CSS"],
        url: "#"
    },
    {
        id: 2,
        title: "GeoSpatial Web Application",
        description: "Developed an interactive geospatial web application for dynamic map visualization and location search using MapLibre GL JS, functioning seamlessly in both online and offline modes. ◦ Designed and implemented RESTful APIs using Java Spring Boot, applying modular MVC architecture, dependency injection, and reusable components for scalability, maintainability, and clean code organization.",
        image: "/assets/image.webp",
        tags: ["REACT JS", "EXPRESS JS", "MONGODB", "VPS", "PWA","Java" ,"Spring Boot", "MapLibre GL JS", "JavaScript", "HTML", "CSS"],
        url: "#"
    },
    
];
export const EXPERIENCE_DATA: Experience[] = [
    
    {
        id: 1,
        role: "Software Developer",
        company: "Pinnacle Consulting LLC",
        duration: "Jan 2024 - Present",
        description: [
            "USPS Geocoding: Designed and developed a robust geocoding service in Java Spring Boot using strong OOP practices. Integrated USPS, Azure Maps, Google, and Esri APIs to ensure high availability and accuracy for Dominion Energy and Scana, achieving 95% validation accuracy and increasing throughput by 30%.e",
            "Multiple APIs: Built and optimized API pipelines using Spring Boot (Java) with robust error handling and logging for distributed address validation for Dominion Energy and Scana. Improved system coverage by 30% and reduced manual errors by 25% with fault-tolerant design.",
            "Drone Pilot: Led a team in developing a geospatial web application using Node.js, Express.js, and MapLibre GL JS for drone data visualization; integrated Workforce and Field Maps-like features for field task management and implemented automation testing with Tricentis Tosca to ensure workflow reliability.",
            "Drone Inspection System: Developed a backend system using .NET Core( C#) and SQL Server for Mesa Associates, Inc. to automate drone image mapping for electric pole health inspections.Designed RESTful APIs following microservices principles , improving inspection accuracy by 99%, reducing processing time by 15%, and minimizing manual review by 40%",
            "Bird Nest Detection System: Developed and deployed a scalable object detection model using YOLOv8 for Mesa Associates, Inc., leveraging distributed training on Google Colab . Achieved 98% detection accuracy, optimizing inspection efficiency and minimizing manual intervention by 40%."
        ],
        tech: ["React", "Node.js", "Postman", "Git", "Java", "Spring Boot", ".NET Core", "SQL Server", "C#" ]
    },
   

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
    { icon: <GithubIcon />, link: "https://github.com/abhipsa-mallick",name: 'Github' },
    { icon: <LinkedinIcon />, link: "https://www.linkedin.com/in/abhipsa-mallick-932780218/",name: 'Linkedin' },
    { icon: <Code />, link: "https://leetcode.com/u/user5740CW/",name: 'Leetcode' },
    { icon: <Code />, link: "https://www.codechef.com/users/mallickabhipsa",name: 'CodeChef' },
];
export const AboutMeData ={
    text : 'About Me',
    description : 'I’m a full-stack developer with strong expertise in backend engineering, Java Spring Boot, .NET (C#), and system design. I build scalable APIs, automation systems, and full-stack applications using Java, Spring Boot, .NET, Node.js, React, and SQL.I also have a solid foundation in Data Structures & Algorithms, enabling me to design efficient, optimized solutions for complex engineering problems.I’m passionate about solving challenging technical problems, building reliable and high-performance systems, and contributing to products that scale and create meaningful impact.',
}
export const ADMIN_EMAIL = 'mallickabhipsa05@gmail.com'