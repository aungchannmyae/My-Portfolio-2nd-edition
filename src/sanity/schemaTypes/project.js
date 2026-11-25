import { defineArrayMember, defineField, defineType } from "sanity";
import { ProjectsIcon } from "@sanity/icons/Projects";

export const statusOptions = ["In Progress", "Completed", "Experimental"];
export const deviceOptions = ["Laptop Only", "Responsive"];

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: ProjectsIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      type: "number",
      description: "Lower numbers are shown first.",
      initialValue: 100,
    }),
    defineField({
      name: "image",
      title: "Screenshot",
      type: "image",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "imagePosition",
      title: "Crop screenshot from",
      type: "string",
      options: {
        list: [
          { title: "Top", value: "top" },
          { title: "Center", value: "center" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      initialValue: "top",
    }),
    defineField({
      name: "imageFullWidth",
      title: "Stretch screenshot to card width",
      type: "boolean",
      description: "Turn on for screenshots that are not wide (closer to square).",
      initialValue: false,
    }),
    defineField({
      name: "status",
      type: "string",
      options: { list: statusOptions, layout: "radio", direction: "horizontal" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "device",
      type: "string",
      options: { list: deviceOptions, layout: "radio", direction: "horizontal" },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "description", type: "text", rows: 4 }),
    defineField({
      name: "tech",
      title: "Tech used",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      options: { layout: "tags" },
    }),
    defineField({
      name: "liveUrl",
      title: "Website link",
      type: "url",
      description: "Leave empty to show the link as disabled.",
    }),
    defineField({
      name: "githubUrl",
      title: "GitHub link",
      type: "url",
      description: "Leave empty to show the link as disabled.",
    }),
    defineField({
      name: "credit",
      title: "Design credit",
      type: "object",
      description: 'Optional. Shows "(Design by …)" under the title.',
      fields: [
        defineField({ name: "name", type: "string" }),
        defineField({ name: "url", type: "url" }),
      ],
    }),
  ],
  orderings: [
    {
      title: "Display order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "status", media: "image" },
  },
});
