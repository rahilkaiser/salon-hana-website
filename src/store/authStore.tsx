import create from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {getToken} from "@/actions/actions";

interface AuthState {
    token: string | null;
    setToken: (token: string) => void;
    fetchToken: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()((set, get) => ({
        token: null,
        setToken: (token: string) => set({token}),
        fetchToken: async () => {
            const newToken = await getToken();
            if (newToken) {
                set({token: newToken});
            }

        },
    }),
);

