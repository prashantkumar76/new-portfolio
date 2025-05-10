import React from 'react'
import { Bolt, Boxes, Chrome, Code, Database } from 'lucide-react';
import {motion} from 'framer-motion';

const SkillList = () => {
    return (
        <>
            <section className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 mt-">
                        {[
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
                                skills: ["Next.js", "Express.js", "React.js"],
                                icon: <Boxes />
                            },
                            {
                                title: "Tools",
                                skills: ["Git", "Docker", "Postman", "Google Cloud", "Cursor", "Miro"],
                                icon: <Bolt />
                            }
                        ].map((category, index) => (
                            <motion.div
                                key={index}
                                className="glass-card p-6 rounded-xl"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)" }}
                            >
                                <div className="text-4xl mb-4">{category.icon}</div>
                                <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                                <ul className="space-y-2">
                                    {category.skills.map((skill, idx) => (
                                        <li key={idx} className="text-muted-foreground">• {skill}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default SkillList