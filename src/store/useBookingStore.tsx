import create from 'zustand';
import {getEvents, getToken, getWorkers} from "@/actions/actions";

interface BookingState {
    token: string | null;
}

const useBookingStore = create<BookingState>((set, get) => ({
    token: null,

    fetchWorkers: async () => {
        const {token} = get();
        if(token) {
            const res = await getWorkers(token);
        }
    },


}));

export default useBookingStore;
