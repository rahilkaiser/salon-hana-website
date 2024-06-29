import create from 'zustand';
import {getToken} from "@/actions/actions";

interface AuthState {
    token: string | null;
    setToken: (token: string) => void;
    fetchToken: () => Promise<void>;
    isFetched: boolean;
}

export const useAuthStore = create<AuthState>()((set, get) => ({
        token: null,
        isFetched: false,
        setToken: (token: string) => set({token}),
        fetchToken: async () => {
            const newToken = await getToken();
            if (newToken) {
                set({
                    token: newToken,
                    isFetched: true
                });
            }
        },
    }),
);

