import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface UserState {
  user: {
    id: string;
    avatar: string;
    name: string;
  } | null;
  setUser: (user: { id: string; avatar: string; name: string } | null) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
export const useUser = () => {
  const { user, setUser } = useUserStore();
  return { user, setUser };
};
