// Sanity project settings. These are public values (they end up in the
// browser bundle), so defaults are fine; override them with env vars if needed.

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "swnee1eh";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-11-01";
