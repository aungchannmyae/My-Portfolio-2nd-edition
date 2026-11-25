import { defineArrayMember, defineField, defineType } from "sanity";
import { UserIcon } from "@sanity/icons/User";

// Single document holding everything on the Profile page.
export default defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  icon: UserIcon,
  groups: [
    { name: "intro", title: "Intro", default: true },
    { name: "contact", title: "Contact card" },
    { name: "resume", title: "Resume" },
  ],
  fields: [
    defineField({
      name: "name",
      type: "string",
      group: "intro",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "role",
      type: "string",
      group: "intro",
      description: 'Under your name in the side card, e.g. "Web Developer ."',
    }),
    defineField({
      name: "headline",
      type: "string",
      group: "intro",
      description: 'Red text after "Hello I\'m", e.g. "Frontend Developer"',
    }),
    defineField({ name: "tagline", type: "text", rows: 2, group: "intro" }),
    defineField({ name: "intro", type: "text", rows: 5, group: "intro" }),
    defineField({
      name: "photo",
      type: "image",
      group: "intro",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "cv",
      title: "CV (PDF)",
      type: "file",
      group: "intro",
      options: { accept: "application/pdf" },
      description: 'Downloaded by the "DownLoad CV" button.',
    }),

    defineField({ name: "location", type: "string", group: "contact" }),
    defineField({
      name: "email",
      type: "string",
      group: "contact",
      validation: (rule) => rule.email(),
    }),
    defineField({ name: "githubUsername", type: "string", group: "contact" }),
    defineField({ name: "githubUrl", type: "url", group: "contact" }),

    defineField({
      name: "skills",
      type: "array",
      group: "resume",
      of: [defineArrayMember({ type: "string" })],
      description: "Shown in the scrolling skills row.",
    }),
    defineField({
      name: "techIcons",
      title: "Tech icons",
      type: "array",
      group: "resume",
      description:
        "Icon names from the tech-stack-icons package (see tech-stack-icons.com), e.g. react, nextjs, git.",
      of: [
        defineArrayMember({
          type: "object",
          name: "techIcon",
          fields: [
            defineField({
              name: "name",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "light",
              title: "White background",
              type: "boolean",
              description: "For logos that are dark on dark (Next.js, GitHub).",
              initialValue: false,
            }),
          ],
          preview: { select: { title: "name" } },
        }),
      ],
    }),
    defineField({
      name: "education",
      type: "array",
      group: "resume",
      of: [
        defineArrayMember({
          type: "object",
          name: "educationItem",
          fields: [
            defineField({
              name: "school",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "years",
              title: "Start year",
              type: "string",
            }),
            defineField({
              name: "endYear",
              title: "End year",
              type: "string",
              description: 'Leave empty for a single year. Type "present" to show the current year.',
            }),
            defineField({ name: "detail", type: "string" }),
          ],
          preview: { select: { title: "school", subtitle: "detail" } },
        }),
      ],
    }),
    defineField({
      name: "learningNote",
      title: "Last education line",
      type: "text",
      rows: 2,
      group: "resume",
      description: "Each line is shown on its own line.",
    }),
  ],
  preview: { select: { title: "name", media: "photo" } },
});
