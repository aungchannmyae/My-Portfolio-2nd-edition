// Used by the `sanity` command line tool (login, cors, dataset import, ...).
import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "swnee1eh",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  },
});
