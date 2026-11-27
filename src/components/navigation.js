import { LuUser, LuFolderGit2, LuMail } from "react-icons/lu";

// `icon` is the browser-tab style "favicon" in the desktop header.
const navigation = [
  { id: 1, name: "Profile", route: "/", icon: LuUser },
  { id: 2, name: "Projects", route: "/projects", icon: LuFolderGit2 },
  { id: 3, name: "Contact", route: "/contact", icon: LuMail },
];

// When Vercel regenerates the home page in the background (ISR, see
// `revalidate`), Next.js renders it with the pathname "/index" instead of "/".
// Treat both as the home route.
const normalizePathname = (pathname) =>
  pathname === "/index" ? "/" : pathname;

// "/" only matches itself; other routes also match their sub-paths.
export const isRouteActive = (rawPathname, route) => {
  const pathname = normalizePathname(rawPathname ?? "");
  return route === "/"
    ? pathname === "/"
    : pathname === route || pathname.startsWith(`${route}/`);
};

export default navigation;
