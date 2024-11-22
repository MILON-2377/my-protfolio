import { motion } from "framer-motion";

const mySkills = [
  {
    name: "React.js",
    icon: "react-icon.svg",
    description:
      "Expert in building dynamic and interactive user interfaces. Developed over 20 projects, including a hospital management system and a barber salon website.",
  },
  {
    name: "Next.js",
    icon: "nextjs-icon.svg",
    description:
      "Proficient in server-side rendering, static site generation, and SEO optimization. Used in creating the Barbex salon website with advanced routing and fast performance.",
  },
  {
    name: "JavaScript (ES6+)",
    icon: "javascript-icon.svg",
    description:
      "Strong knowledge of modern JavaScript features, enabling me to write clean, efficient, and modular code. Applied in all frontend and backend projects.",
  },
  {
    name: "HTML5",
    icon: "html5-icon.svg",
    description:
      "Skilled in creating semantic, accessible, and structured web content. Used in building user-friendly layouts for all projects.",
  },
  {
    name: "CSS3",
    icon: "css3-icon.svg",
    description:
      "Proficient in styling websites with responsive designs and animations. Used extensively in projects like Barbex to ensure modern and appealing interfaces.",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwind-css-icon.svg",
    description:
      "Expert in rapid UI development with utility-first design. Leveraged in projects like the Barbex and grocery shop applications.",
  },
  {
    name: "Node.js",
    icon: "nodejs-icon.svg",
    description:
      "Experienced in building scalable backend services. Used in EzyMetrics assignment to integrate APIs and process lead and campaign data.",
  },
  {
    name: "Express.js",
    icon: "expressjs-icon.svg",
    description:
      "Efficient in creating RESTful APIs and web servers. Applied in backend development for the Internshala backend assignment and data integration tasks.",
  },
  {
    name: "MySQL",
    icon: "mysql-icon.svg",
    description:
      "Proficient in designing relational database schemas and writing complex queries. Built the CWNUEMS_DBNew and tourism database as part of assignments.",
  },
  {
    name: "MongoDB",
    icon: "mongodb-icon.svg",
    description:
      "Experienced in handling NoSQL databases for flexible data storage. Used in projects requiring dynamic schemas, like the Barbex backend.",
  },
  {
    name: "Firebase",
    icon: "firebase-icon.svg",
    description:
      "Skilled in authentication, real-time databases, and hosting. Applied in various projects to ensure seamless user experiences and fast deployment.",
  },
  {
    name: "Framer Motion",
    icon: "framer-motion-icon.svg",
    description:
      "Proficient in creating smooth animations for React applications. Currently enhancing animation skills to build visually engaging interfaces.",
  },
  {
    name: "Redux",
    icon: "redux-icon.svg",
    description:
      "Expert in managing complex application states. Applied in several projects to ensure predictable and efficient state handling.",
  },
  {
    name: "JWT",
    icon: "jwt-icon.svg",
    description:
      "Experienced in securing APIs with token-based authentication. Used in backend systems to handle secure user sessions and API access.",
  },
  {
    name: "Git & GitHub",
    icon: "github-icon.svg",
    description:
      "Highly proficient in version control and collaborative coding. Managed repositories for all projects, ensuring clean and organized codebases.",
  },
];

export default function MySkills() {
  return (
    <div className=" mt-10 gap-3 grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 ">
      {mySkills.map((i, ix) => (
        <motion.div
          key={i.name + ix}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          
          transition={{ duration: 1, ease: "easeInOut" }}
          className="border p-5 flex gap-3 flex-col"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: ix * 0.1 }} // Delay based on index for sequential animation
            className="rounded-md p-2 w-11 border"
          >
            <img
              src={i.icon}
              alt={`${i.name} icon`}
              className="w-full h-full object-contain"
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: ix * 0.1 }}
            className="text-sm sm:text-[17px] lg:text-xl font-semibold"
          >
            {i.name}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: ix * 0.1 }}
            className="text-sm sm:text-[15px] text-slate-500"
          >
            {i.description}
          </motion.p>
        </motion.div>
      ))}
    </div>
  );
}
