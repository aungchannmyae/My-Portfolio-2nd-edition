import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import { getProjects } from "@/sanity/content";

export const metadata = { title: "Projects" };

// Refresh from Sanity at most once a minute (keep in sync with REVALIDATE_SECONDS).
export const revalidate = 60;

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <section>
      <SectionTitle>Projects</SectionTitle>
      <div className=" w-fit py-2 duration-200 grid max-sm:grid-cols-1 max-lg:gap-6 xl:grid-cols-3 md:grid-cols-2 xl:gap-6 lg:gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
