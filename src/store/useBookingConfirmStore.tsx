import {create} from "zustand";
import {useServiceStore} from "@/store/useServiceStore";
import {TimeSlot} from "@/models/TimeSlot";
import {createJSONStorage, persist} from "zustand/middleware";

interface UserDetails {
    name: string;
    email: string;
    phoneNumber: string;
}

interface BookingDetails {
    selectedService: Service,
    selectedCategory: Category,
    bookingDate: Date,
    timeSlot: TimeSlot
}


interface BookingState {
    userDetails: UserDetails;
    setUserDetails: (details: Partial<UserDetails>) => void;
    selectedBookingDetails: BookingDetails;
    setSelectedBookingDetails: (details: Partial<BookingDetails>) => void;
}

export const useBookingStore = create<BookingState>()(
    persist((set, get) => (
            {
                userDetails: {
                    name: '',
                    email: '',
                    phoneNumber: '',
                },
                selectedBookingDetails: {
                    bookingDate: null,
                    timeSlot: null,
                    selectedService: useServiceStore.getState().selectedService,
                    selectedCategory: useServiceStore.getState().selectedCategory,
                },
                setSelectedBookingDetails: (details: BookingDetails) =>
                    set((state) => ({selectedBookingDetails: {...state.selectedBookingDetails, ...details}})),
                setUserDetails: (details) =>
                    set((state) => ({userDetails: {...state.userDetails, ...details}})),

            }),
        {
            name: 'booking-storage',
            storage: createJSONStorage(() => sessionStorage),
        }
    ));
