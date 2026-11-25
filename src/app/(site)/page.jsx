import Profile from "@/components/Profile";
import profile from "@/data/profile";

// Rebuild at most once a day, so "( 2024 - <current year> )" stays current.
export const revalidate = 86400;

export default function HomePage() {
  return <Profile profile={profile} />;
}
