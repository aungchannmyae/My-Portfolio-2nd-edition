// Project cards shown on /projects, in display order.
// This file will later seed the Sanity "project" documents.
//
// liveUrl / githubUrl: the links were commented out on the old site, so they
// are null here to keep the same behaviour. The original URLs are noted next
// to each one — put them back to turn the links on.

const projects = [
  {
    title: "Next Shop",
    image: { src: "/nextShop.png", width: 1898, height: 1078 },
    imagePosition: "center",
    status: "In Progress",
    device: "Laptop Only",
    description:
      "My 2nd Next.js project. I'm building it like a real-world e-commerce project. You can test it by adding items to the cart and wishlist. Using Platzi fake store API. Updates will come soon.",
    tech: ["Next.js", "Tailwind Css", "Vercel"],
    liveUrl: null,
    githubUrl: null,
  },
  {
    title: "SR Jewelry",
    credit: {
      name: "Pim Pim",
      url: "https://www.linkedin.com/in/pim-pim-wuttyee-shein-06b7b22ab/",
    },
    image: { src: "/SR.png", width: 1898, height: 1079 },
    status: "Completed",
    device: "Laptop Only",
    description:
      "E-commerce website for a jewelry store. Features include product listings, product details, and a shopping cart. But the website is just design the features can not be used.",
    tech: ["React.js", "Tailwind Css", "Vite", "Netlify"],
    liveUrl: null, // https://sr-jewelry-design-by-pim.netlify.app/
    githubUrl: null, // https://github.com/aungchannmyae/SR-Jewelry-Design-by-Pim
  },
  {
    title: "Tinyverse Kindergarten",
    image: { src: "/Tiny.png", width: 1899, height: 1079 },
    status: "Completed",
    device: "Responsive",
    description:
      "One of my work shop group projects from my MMS-It frontend class. This is a profile website. My first time Next.js project.",
    tech: ["Next.js", "Tailwind Css", "Vercel"],
    liveUrl: null, // https://tinyverse-kindergarten.vercel.app/
    githubUrl: null, // https://github.com/aungchannmyae/TinyverseKindergarten-MCF4-MCP3
  },
  {
    title: "Estatela Web design",
    image: { src: "/Estatela.jpg", width: 2160, height: 1728 },
    imageFullWidth: true,
    status: "Completed",
    device: "Responsive",
    description:
      "One of my workshop group projects from my MMS-It frontend class. It is a profile website and can explore properties that is available and the location that you prefer.",
    tech: ["React.js", "Tailwind Css", "Vite", "Vercel"],
    liveUrl: null, // https://estatelaproperty-mcf4-mcp3.netlify.app/
    githubUrl: null, // https://github.com/thet-naing-lin/EstatelaProperty-MCF4-MCP3
  },
  {
    title: "React E-commerce",
    image: { src: "/project-1.png", width: 1920, height: 867 },
    status: "Experimental",
    device: "Laptop Only",
    description:
      "React e-commerce project using fake store api. Can make the process like adding to cart, can see the cart's total prices and can categorize items . Maintenance or updates will not be unavailable.",
    tech: ["React.js", "Tailwind Css", "Vite", "Vercel"],
    liveUrl: null, // https://joyboi-e-commerce.vercel.app/
    githubUrl: null, // https://github.com/aungchannmyae/react-E-commerce
  },
];

export default projects;
