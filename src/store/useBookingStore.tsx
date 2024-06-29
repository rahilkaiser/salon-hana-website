import {getEvents, getFreeTimeSlots, getToken, getWorkers} from "@/actions/actions";
import {create} from "zustand";
import {useServiceStore} from "@/store/useServiceStore";
import {TimeSlot} from "@/models/TimeSlot";
import {formatDate} from "@/utils/Utils";

interface BookingState {
    workers: Worker[];
    timeSlots: TimeSlot[];
    fetchWorkers: () => Promise<void>;
    fetchAvailableTimeSlots: (dateFrom: Date, dateTo: Date) => Promise<void>;
    isLoadingTimeSlots: boolean;
    setSelectedWorker: (id: string | null) => void;
    selectedWorker: Worker | null;
    currentDate: Date;
    getWeekStartDate: (date: Date) => Date;
    getWeekDates: () => Date[];
    goToNextWeek: () => void;
    goToPreviousWeek: () => void;
    initializeWeek: () => void;
}

export const useBookingStore = create<BookingState>((set, get) => (
    {
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
                ).then(res => res.filter(slot => slot.type == "free")) as TimeSlot[];
                console.log(freeTimeSlots);
                set({timeSlots: freeTimeSlots, isLoadingTimeSlots: false});
            }


            const freeSlotTest = {
                "90": {
                    "id": "2024-07-02 10:30:00",
                    "date": "2024-07-02",
                    "time": "10:30:00",
                    "type": "free",
                    "slots_count": 9,
                    "client_date": "2024-07-02",
                    "client_time": "10:30:00",
                    "available_slots": null,
                    "total_slots": null
                }
            }

            const busySlotTest = {
                "10": {
                    "id": "2024-07-01 10:50:00",
                    "date": "2024-07-01",
                    "time": "10:50:00",
                    "type": "busy",
                    "slots_count": 1,
                    "client_date": "2024-07-01",
                    "client_time": "10:50:00"
                }
            }


            // const catId = useServiceStore.getState().selectedCategory?.id
            // const selDate = get().selectedDate;
            // if(selDate) {
            //     const selectedMonth = selDate.month;
            //     const dateFrom = `${selDate.year}-${selectedMonth}-01`
            //     const lastDayOfMonth = new Date(selDate.year, selectedMonth, 0).getDate();
            //     const dateTo = `${selDate.year}-${selectedMonth}-${lastDayOfMonth}`
            //
            //     if(catId) {
            //         const allDates = [];
            //         const services = useServiceStore.getState().cart;
            //
            //         for (const service of services) {
            //             const res = await getBookingDays(
            //                 parseInt(catId),
            //                 parseInt(service.id),
            //                 get().selectedWorker ? parseInt(get().selectedWorker.id) : null,
            //                 dateTo,
            //                 dateFrom
            //             ) as BookingDay[];
            //
            //             console.log(res);
            //             if(res) {
            //
            //                 allDates.push(res.map(item => item.date));
            //             }
            //         }
            //         const filteredDates = allDates.reduce((acc, dates) => {
            //             if (!acc.length) {
            //                 return dates;
            //             }
            //
            //             return acc.filter(date => dates.includes(date));
            //         }, []);
            //         set({bookingDays: filteredDates});
            //
            //     }
            // }
            // await useAuthStore.getState().fetchToken();
            // const selService = useServiceStore.getState().selectedService;
            // // const token = useAuthStore.getState().token;
            //
            // if ( selService) {
            //     const today = new Date();
            //     const startOfWeekDate = startOfWeek(today, { weekStartsOn: 1 }); // Monday
            //     const endOfWeekDate = endOfWeek(today, { weekStartsOn: 1 }); // Sunday
            //
            //     const formattedStartOfWeek = format(startOfWeekDate, 'yyyy-MM-dd');
            //     const formattedEndOfWeek = format(endOfWeekDate, 'yyyy-MM-dd');
            //
            //     const res = await getTimeSlots(
            //         formattedStartOfWeek,
            //         formattedEndOfWeek,
            //         1,
            //         [1],
            //         8
            //     );
            //
            //     set({
            //         timeSlots: res
            //     });
            // }
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
        workers: [],
        selectedWorker: null,
        setSelectedWorker: (id) => {
            if (id == "erster_freier_mitarbeiter") {
                set({
                    selectedWorker: null,
                });
                return;
            }
            const w = get().workers.find((worke) => worke.id === id);
            set({
                selectedWorker: w,
            });
        },
        fetchWorkers: async () => {
            const res = await getWorkers();
            set({workers: Object.values(res)});
            console.log("WORKERS", res);
        },
    }));
