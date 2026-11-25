import Profile from "@/components/Profile";
import { getProfile } from "@/sanity/content";

// Refresh from Sanity at most once a minute (keep in sync with REVALIDATE_SECONDS).
export const revalidate = 60;

export default async function HomePage() {
  const profile = await getProfile();
  return <Profile profile={profile} />;
}
