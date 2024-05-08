import create from "zustand";

interface MenuState {
  isVisible: boolean;
  titleMenu: string;
  toggleModal: () => void;
  selectTitleMenu: (text: string) => void;
}

export const useMenuStore = create<MenuState>((set) => ({
  isVisible: true,
  titleMenu: "start",
  toggleModal: () => set((state) => ({ isVisible: !state.isVisible })),
  selectTitleMenu: (text) => set({ titleMenu: text }),
}));
