import { defineQuery } from "next-sanity";
import { client } from "./client";
import localProfile from "@/data/profile";
import localProjects from "@/data/projects";

// How often (seconds) a page is rebuilt with fresh Sanity content.
// Pages export this same value as `revalidate`.
export const REVALIDATE_SECONDS = 60;

const fetchOptions = { next: { revalidate: REVALIDATE_SECONDS } };

// Shapes the Sanity documents like the local data files, so the components
// work the same with either source.
const imageProjection = `{
  "src": asset->url,
  "width": asset->metadata.dimensions.width,
  "height": asset->metadata.dimensions.height
}`;

const PROFILE_QUERY = defineQuery(`*[_id == "profile"][0]{
  name, role, headline, tagline, intro, location, email,
  "photo": photo${imageProjection},
  "cvUrl": cv.asset->url,
  "github": { "username": githubUsername, "url": githubUrl },
  "skills": coalesce(skills, []),
  "techIcons": coalesce(techIcons[]{ name, "light": coalesce(light, false) }, []),
  "education": coalesce(education[]{ school, years, endYear, detail }, []),
  learningNote
}`);

const PROJECTS_QUERY = defineQuery(`*[_type == "project" && defined(image.asset)]
  | order(order asc, _createdAt asc){
  title,
  "image": image${imageProjection},
  imagePosition, imageFullWidth, status, device, description,
  "tech": coalesce(tech, []),
  liveUrl, githubUrl,
  "credit": select(defined(credit.name) => credit, null)
}`);

const CV_FILE_NAME = "Aung_Chan_Myae_CV.pdf";

// Until the Sanity dataset has content, fall back to the local data files.
export async function getProfile() {
  const doc = await client.fetch(PROFILE_QUERY, {}, fetchOptions);
  if (!doc?.photo?.src) return localProfile;

  return {
    ...doc,
    // Sanity's ?dl= makes the browser download the file with this name.
    cv: doc.cvUrl
      ? { url: `${doc.cvUrl}?dl=${CV_FILE_NAME}`, fileName: CV_FILE_NAME }
      : localProfile.cv,
    learningNote: (doc.learningNote ?? "").split("\n").filter(Boolean),
  };
}

export async function getProjects() {
  const projects = await client.fetch(PROJECTS_QUERY, {}, fetchOptions);
  return projects.length > 0 ? projects : localProjects;
}
