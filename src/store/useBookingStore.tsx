import {getFreeTimeSlots} from "@/actions/actions";
import {create} from "zustand";
import {useServiceStore} from "@/store/useServiceStore";
import {TimeSlot} from "@/models/TimeSlot";
import {formatDate} from "@/utils/Utils";

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
    timeSlots: TimeSlot[];
    fetchAvailableTimeSlots: (dateFrom: Date, dateTo: Date) => Promise<void>;
    isLoadingTimeSlots: boolean;
    currentDate: Date;
    getWeekStartDate: (date: Date) => Date;
    getWeekDates: () => Date[];
    goToNextWeek: () => void;
    goToPreviousWeek: () => void;
    initializeWeek: () => void;
    userDetails: UserDetails;
    setUserDetails: (details: Partial<UserDetails>) => void;
    selectedBookingDetails: BookingDetails;
}

export const useBookingStore = create<BookingState>((set, get) => (
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
            set((state) => ({ selectedBookingDetails: { ...state.selectedBookingDetails, ...details } })),
        setUserDetails: (details) =>
            set((state) => ({userDetails: {...state.userDetails, ...details}})),
        timeSlots: [],
        isLoadingTimeSlots: false,
        fetchAvailableTimeSlots: async (dateFrom: Date, dateTo: Date) => {

            const selServiceId = useServiceStore.getState().selectedService.id;

            if (selServiceId) {
                set({isLoadingTimeSlots: true})
                const freeTimeSlots = await getFreeTimeSlots(
                    parseInt(selServiceId),
                    formatDate(dateTo),
                    formatDate(dateFrom),
                ).then((res:any) => res.filter(slot => slot.type == "free")) as TimeSlot[];
                console.log(freeTimeSlots);
                set({timeSlots: freeTimeSlots, isLoadingTimeSlots: false});
            }
        },
        currentDate: new Date(),
        getWeekStartDate: (date) => {
            const dayOfWeek = date.getDay();
            const difference = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
            const startDate = new Date(date.setDate(date.getDate() + difference));

            if (dayOfWeek === 0 || dayOfWeek === 6) {
                startDate.setDate(startDate.getDate() + 7);
            }

            return startDate;
        },
        getWeekDates: () => {
            const startOfWeek = get().getWeekStartDate(new Date(get().currentDate));
            const weekDates = [];
            for (let i = 0; i < 7; i++) {
                weekDates.push(new Date(startOfWeek.getFullYear(), startOfWeek.getMonth(), startOfWeek.getDate() + i));
            }
            return weekDates;
        },
        goToNextWeek: () => {
            const nextWeekDate = new Date(get().currentDate.setDate(get().currentDate.getDate() + 7));
            set({currentDate: nextWeekDate});

            const weekDates = get().getWeekDates();
            get().fetchAvailableTimeSlots(weekDates[0], weekDates[weekDates.length - 1])
        },

        goToPreviousWeek: () => {
            const prevWeekDate = new Date(get().currentDate.setDate(get().currentDate.getDate() - 7));
            set({currentDate: prevWeekDate});

            const weekDates = get().getWeekDates();
            get().fetchAvailableTimeSlots(weekDates[0], weekDates[weekDates.length - 1])
        },
        initializeWeek: () => {
            let date = new Date();  // Use today's date
            let dayOfWeek = date.getDay();  // Get current day of week (0=Sunday, 1=Monday, ..., 6=Saturday)

            if (dayOfWeek === 0) {  // If today is Sunday
                // Set to previous Monday
                date.setDate(date.getDate() + 1);
            } else if (dayOfWeek == 6) {  // If today is not Monday
                // Adjust to the most recent Monday
                date.setDate(date.getDate() + 2);
            }

            set({currentDate: date});
        },
    }));
