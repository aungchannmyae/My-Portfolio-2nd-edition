import { create } from "zustand";

const useGeneralStore = create((set) => ({
  navBar: [
    { id: 1, name: "Profile", isRouteActive: false, page: false, route: "/" },

    {
      id: 2,
      name: "Projects",
      isRouteActive: false,
      page: false,
      route: "/projects",
    },
    {
      id: 3,
      name: "Contact",
      isRouteActive: false,
      page: false,
      route: "/contact",
    },
  ],
  activeNavBar: (navBarId) =>
    set((state) => ({
      navBar: state.navBar.map((el) =>
        el.id === navBarId
          ? { ...el, isRouteActive: true, page: true }
          : { ...el, isRouteActive: false, page: false }
      ),
    })),
  sideBar: false,
  activeSideBar: () =>
    set((state) => ({
      sideBar: !state.sideBar,
    })),
}));

export default useGeneralStore;
