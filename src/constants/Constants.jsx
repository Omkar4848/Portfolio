const navLinks = [
  {
    name: "Work",
    link: "#work",
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
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 0, suffix: "+", label: "Years of Experience" },
  { value: 2, suffix: "+", label: "Satisfied Clients" },
  { value: 5, suffix: "+", label: "Completed Projects" },
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
    title: "Hands-on Experience",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },

  {
    imgPath: "/images/time.png",
    title: "Responsive Design",
    desc: "Building user-friendly interfaces that work seamlessly across all devices.",
  },
];

const expCards = [
  {
    review:
      "During his training period, showed exceptional enthusiasm for learning web development fundamentals. He quickly grasped HTML, CSS, and JavaScript, building a solid foundation for future projects.",

    logoPath: "/images/logo1.png",
    title: "Web Developer Trainee",
    date: "June 2024 - September 2024",
    responsibilities: [
      "Learned and implemented HTML, CSS, and JavaScript in small-scale projects.",
      "Understood the basics of responsive web design using Flexbox and Grid.",
      "Worked on beginner projects to apply concepts like DOM manipulation and event handling.",
    ],
  },
  {
    review:
      "Gained hands-on experience building full-stack web applications using the MERN stack. Focused on integrating backend APIs with frontend interfaces for real-world use cases.",

    logoPath: "/images/logo2.png", // update with actual path
    title: "MERN Stack Developer",
    date: "August 2024 - Present",
    responsibilities: [
      "Developed full-stack applications using MongoDB, Express.js, React.js, and Node.js.",
      "Created and integrated RESTful APIs with frontend components.",
      "Implemented authentication, authorization, and role-based access control.",
      "Optimized database queries and improved application performance.",
      "Deployed applications to platforms like Vercel and Render.",
    ],
  },
  {
    review:
      "My dedication to Salesforce development is evident through his consistent Trailhead achievements and practical projects. He actively applied concepts learned from modules to build functional Salesforce apps.",

    logoPath: "/images/logo3.png",
    title: "Salesforce Developer (Self-Training & Trailhead)",
    date: "January 2025 - Present",
    responsibilities: [
      "Completed multiple Trailhead modules covering Apex, Lightning Web Components, and Flow automation.",
      "Built a sample Salesforce app integrating custom objects, workflows, and dashboards.",
      "Learned Salesforce security, data management, and automation best practices.",
    ],
  },
];

const techStackIcons = [
  {
    name: "Frontend Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },

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
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];
const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },

  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  counterItems,
  navLinks,
  logoIconsList,
  abilities,
  expCards,
  techStackIcons,
  socialImgs,
};
