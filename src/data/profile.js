// Profile page content. Will later seed the Sanity "profile" document.

const profile = {
  name: "Aung Chan Myae",
  role: "Web Developer .",
  headline: "Frontend Developer",
  tagline:
    "Bringing visual designs to life in a way that is interactive, efficient, and user-friendly.",
  photo: "/Aung Chan Myae.jpg",
  location: "Yangon , Myanmar",
  email: "myae0517@gmail.com",
  github: { username: "aungchannmyae", url: "https://github.com/aungchannmyae" },
  intro:
    "I began working in web development in 2022. I think of myself as someone who is responsible and organized. Always looking forward to the best opportunities in this software development community. In 2024, I actively participated as a Frontend developer in three real-world projects that all involved admin dashboards.",
  cv: { url: "/Aung_Chan_Myae_CV.pdf", fileName: "Aung_Chan_Myae_CV.pdf" },

  skills: [
    "Responsive Web Design",
    "React.js",
    "Next.js",
    "Tailwind Css",
    "Rest Api",
    "Necessary Tools",
  ],

  // Names from the tech-stack-icons package. `light` adds a white background
  // for logos that are dark on dark.
  techIcons: [
    { name: "js" },
    { name: "react" },
    { name: "nextjs", light: true },
    { name: "vitejs" },
    { name: "tailwindcss" },
    { name: "figma" },
    { name: "netlify2" },
    { name: "git" },
    { name: "github", light: true },
    { name: "postman" },
    { name: "vscode" },
  ],

  // `endYear: "present"` renders the current year.
  education: [
    { school: "B.E.H.S (2) Insein", years: "2019", detail: "Undergraduate" },
    {
      school: "West Yangon Technology University",
      years: "2019",
      detail: "First Year Mechatronics Specialization",
    },
    {
      school: "West Yangon University",
      years: "2024",
      endYear: "present",
      detail: "First Year E-Major (Distance) Specialization",
    },
  ],
  learningNote: ["Started Learning Web Development", "In MMS-IT Since 2022"],
};

export default profile;
