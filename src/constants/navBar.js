import { LuUser, LuFolderGit2, LuMail } from "react-icons/lu";

// Navigation links for the header. Active state is handled by
// react-router's <NavLink> via its `isActive` render prop, so no
// "isRouteActive" flag is tracked here anymore. `icon` is used as the
// browser-tab style "favicon" in the desktop header.
const navBar = [
  { id: 1, name: "Profile", route: "/", icon: LuUser },
  { id: 2, name: "Projects", route: "/projects", icon: LuFolderGit2 },
  { id: 3, name: "Contact", route: "/contact", icon: LuMail },
];

export default navBar;
