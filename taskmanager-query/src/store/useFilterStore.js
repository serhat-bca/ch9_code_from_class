import { create } from "zustand";

export const useFilterStore = create((set) => {
  return {
    filter: "all",
    setFilter: (newFilterValue) => set({ filter: newFilterValue }),
  };
});
