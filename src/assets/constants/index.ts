const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Coding Achievements",
    link: "#coding-achievements",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 4, suffix: "+", label: "Months of Internship Experience" },
  { value: 5, suffix: "+", label: "Full-Stack Projects" },
  { value: 250, suffix: "+", label: "Coding Challenges Solved" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Attention to Detail",
    desc: "Ensuring precision in coding and project delivery, meticulously resolving bugs and optimizing solutions during internship projects.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Effective Collaboration",
    desc: "Thrived in team settings, working seamlessly with colleagues to meet deadlines and deliver high-quality results in a fast-paced environment.",
  },
  {
    imgPath: "/images/time.png",
    title: "Adaptability",
    desc: "Quickly learned and applied new technologies like Odoo and FastAPI, embracing challenges to grow as a developer.",
  },
];

const techStackImgs = [
  {
    name: "React",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Redux",
    imgPath: "/images/logos/redux.svg",
  },
  {
    name: "Java",
    imgPath: "/images/logos/java.svg",
  },
  {
    name: "Node.js",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "MySQL",
    imgPath: "/images/logos/mysql.svg",
  },
  {
    name: "Tailwind CSS",
    imgPath: "/images/logos/tailwind.svg",
  },
  {
    name: "Git",
    imgPath: "/images/logos/git.svg",
  },
  {
    name: "Three.js",
    imgPath: "/images/logos/three.png",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  // {
  //   name: "Python Developer",
  //   modelPath: "/models/python-transformed.glb",
  //   scale: 0.8,
  //   rotation: [0, 0, 0],
  // },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const codingAchievements = [
  {
    imgPath: "/images/logos/leet.png",
    title: "LeetCode",
    desc: "Solved 150+ coding challenges, mastering data structures and algorithms with Java.",
    date: "January 2023 - April 2025",
  },
  {
    imgPath: "/images/logos/gfg.png",
    title: "GeeksforGeeks",
    desc: "Solved 100+ coding challenges, excelling in algorithmic problem-solving with Java.",
    date: "January 2023 - April 2025",
  },
];
const expCards = [
  {
    review:
      "Ashok demonstrated strong problem-solving skills and technical expertise in Odoo development, contributing to optimized business processes and timely project delivery.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.jpeg",
    title: "Python Odoo Developer Intern",
    date: "March 2024 - June 2024",
    responsibilities: [
      "Developed and optimized Odoo modules, resolving bugs and enhancing functionality.",
      "Collaborated with a 5-member team to meet project deadlines under tight schedules.",
      "Wrote 500+ lines of Python and HTML code to improve Odoo business processes.",
    ],
  },
  {
    review:
      "Ashok showcased exceptional full-stack development skills, delivering a robust scholarship portal that streamlined administrative processes and enhanced user experience.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.jpeg",
    title: "Freelance Full Stack Developer",
    date: "October 2023 - February 2024",
    responsibilities: [
      "Built a scholarship management web app with Google and Microsoft OAuth authentication and role-based access control.",
      "Developed backend with Node.js, Express, Sequelize ORM, and MySQL, and frontend with React, Ant Design, and Tailwind CSS.",
      "Implemented JWT authentication for 100+ users and designed a responsive UI supporting English and Arabic, reducing admin processing time by 30%.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    link: "https://www.instagram.com/ashok.24_/",
    imgPath: "/images/insta.png",
  },
  {
    name: "git",
    link: "https://github.com/ashokn-24",
    imgPath: "/images/github.svg",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/ashokn24",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  codingAchievements,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
