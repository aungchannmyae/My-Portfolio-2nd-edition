import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // Next.js caches the responses (see REVALIDATE_SECONDS), so read straight
  // from the API to get edits as soon as a page refreshes.
  useCdn: false,
  perspective: "published",
});
