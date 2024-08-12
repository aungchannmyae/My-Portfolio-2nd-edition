import { create } from "zustand";

const useGeneralStore = create((set) => ({
  navBar: [
    { id: 1, name: "Profile", isActive: true, page: true },
    { id: 2, name: "About Me", isActive: false, page: false },
    { id: 3, name: "Resume", isActive: false, page: false },
    { id: 4, name: "Project", isActive: false, page: false },
    { id: 5, name: "Contact", isActive: false, page: false },
  ],
  activeNavBar: (navBarId) =>
    set((state) => ({
      navBar: state.navBar.map((el) =>
        el.id === navBarId
          ? { ...el, isActive: true, page: true }
          : { ...el, isActive: false, page: false }
      ),
    })),
  sideBar: false,
  activeSideBar: () => 
    set((state) => ({
      sideBar: !state.sideBar

  }))
}));

export default useGeneralStore;
