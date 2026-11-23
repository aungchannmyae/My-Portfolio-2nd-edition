import Image from "next/image";
import { LuArrowUpRight } from "react-icons/lu";
import Reveal from "./Reveal";

const statusColor = {
  "In Progress": "bg-blue-500",
  Completed: "bg-purple-500",
  Experimental: "bg-orange-500",
};

const deviceColor = {
  "Laptop Only": "bg-red-500",
  Responsive: "bg-green-500",
};

// Renders an <a> without href when the url is empty, matching the old site
// where the links were commented out.
const ExternalLink = ({ href, className, children }) => (
  <a
    href={href || undefined}
    target={href ? "_blank" : undefined}
    rel={href ? "noopener noreferrer" : undefined}
    className={className}
  >
    {children}
  </a>
);

const linkClass =
  " hover:translate-x-1 duration-200 inline-flex justify-center items-center gap-2 text-[#df4f3e]";

const ProjectCard = ({ project }) => {
  const {
    title,
    credit,
    image,
    imagePosition = "top",
    imageFullWidth = false,
    status,
    device,
    description,
    tech,
    liveUrl,
    githubUrl,
  } = project;

  return (
    <article className=" group">
      <Reveal from="up" className=" shadow-2xl rounded-lg shadow-zinc-950">
        <div className=" h-[260px] p-2">
          <ExternalLink href={liveUrl}>
            <Image
              className={` ${imageFullWidth ? "w-full" : "w-fit"} h-full select-none opacity-80 group-hover:opacity-100 duration-500 group-hover:scale-105 rounded-lg object-cover ${
                imagePosition === "center" ? "object-center" : "object-top"
              }`}
              src={image.src}
              alt={`Screenshot of ${title}`}
              width={image.width}
              height={image.height}
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 400px"
            />
          </ExternalLink>
        </div>
        <div className=" flex flex-col gap-2 p-2">
          <h2 className="block max-lg:text-lg xl:text-xl lg:text-xl text-white font-semibold tracking-wider">
            {title}
            {credit && (
              <>
                {" "}
                <br /> (Design by{" "}
                <a
                  className=" text-green-600 hover:text-green-400 duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={credit.url}
                >
                  {credit.name}
                </a>
                )
              </>
            )}
          </h2>
          <p className=" inline-flex flex-row flex-wrap gap-2 text-lg text-stone-400">
            <span
              className={` text-white font-semibold rounded-md px-1 ${statusColor[status] ?? "bg-stone-500"}`}
            >
              {status}
            </span>
            <span
              className={` text-white font-semibold rounded-md px-1 ${deviceColor[device] ?? "bg-stone-500"}`}
            >
              {device}
            </span>
          </p>
          <p className=" text-stone-400 text-base text-wrap">{description}</p>
          <ul className=" text-lg text-stone-400 flex gap-5 flex-wrap">
            {tech.map((name) => (
              <li key={name} className=" px-2 border border-stone-300 rounded-md ">
                {name}
              </li>
            ))}
          </ul>
          <p className=" inline-flex gap-5 text-lg text-stone-400">
            <ExternalLink href={liveUrl} className={linkClass}>
              Website Link <LuArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </ExternalLink>
            <ExternalLink href={githubUrl} className={linkClass}>
              GitHub <LuArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </ExternalLink>
          </p>
        </div>
      </Reveal>
    </article>
  );
};

export default ProjectCard;
