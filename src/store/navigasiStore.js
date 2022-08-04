import create from "zustand";

export const useNavStore = create((set) => ({
  navActive: "beranda",
  addNavActive: (active) => set(() => ({ navActive: active })),
}));
