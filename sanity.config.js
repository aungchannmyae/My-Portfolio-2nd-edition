"use client";

// Sanity Studio, served by Next.js at /studio.
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { UserIcon } from "@sanity/icons/User";
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schemaTypes";

// "profile" is a single document: open it directly and hide create/delete.
const singletonTypes = new Set(["profile"]);
const singletonActions = new Set(["publish", "discardChanges", "restore"]);

export default defineConfig({
  name: "default",
  title: "Portfolio",
  basePath: "/studio",
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    actions: (actions, { schemaType }) =>
      singletonTypes.has(schemaType)
        ? actions.filter(({ action }) => action && singletonActions.has(action))
        : actions,
  },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Profile")
              .id("profile")
              .icon(UserIcon)
              .child(S.document().schemaType("profile").documentId("profile")),
            S.divider(),
            S.documentTypeListItem("project").title("Projects"),
          ]),
    }),
    // GROQ query playground, handy for testing queries.
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
