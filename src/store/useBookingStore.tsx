import create from 'zustand';
import {getEvents, getToken, getWorkers} from "@/actions/actions";

interface BookingState {
    token: string | null;
    events: any[];
    fetchToken: () => Promise<void>;
    fetchEvents: () => Promise<void>;
}

const useBookingStore = create<BookingState>((set, get) => ({
    token: null,
    events: [],

    fetchEvents: async () => {
        const {token} = get();
        if(token) {
            const res = await getEvents(token);
            set({events: Object.values(res)});
        }
    },

    fetchWorkers: async () => {
        const {token} = get();
        if(token) {
            const res = await getWorkers(token);
            set({events: Object.values(res)});
        }
    },

    fetchToken: async () => {
        const token = await getToken();
        if (token) {
            set({token});
        }

    },
}));

export default useBookingStore;
