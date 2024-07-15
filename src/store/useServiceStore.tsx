import {create} from "zustand";
import {getCategories, getEvents} from "@/actions/actions";
import {createJSONStorage, persist} from "zustand/middleware";

type ServiceStore = {
    qty: number;
    total: number;
    cart: Service[];
    selectedCategory: Category | null;
    selectedService: Service | null;
    categories: Category[];
    services: Service[];
    setSelectedCategory: (category: Category) => void;
    addService: (service: Service) => void
    removeService: (service: Service) => void
    fetchEvents: () => Promise<void>;
    fetchCategories: () => Promise<void>;
    categoriesIsLoading: boolean;
    servicesIsLoading: boolean;
}


export const useServiceStore = create<ServiceStore>()(
    persist(
    (set, get) => (
    {
        total: 0,
        qty: 0,
        cart: [],
        selectedCategory: null,
        selectedService: null,
        categories: [],
        services: [],
        categoriesIsLoading: false,
        servicesIsLoading: false,

        fetchCategories: async () => {
            get().categoriesIsLoading = true;
            const res = await getCategories();
            const cats = Object.values(res) as Category[];
            set({
                categoriesIsLoading: false,
                categories: cats,
                selectedCategory: cats[0],
            });
        },

        fetchEvents: async () => {
            get().servicesIsLoading = true;
            const res = await getEvents();
            set({
                servicesIsLoading: false,
                services: Object.values(res)
            });
        },
        setSelectedCategory: (category) => {
            set({selectedCategory: category})
        },

        addService: (service) => {
            set(state => {

                state.selectedService = service;
                // state.cart.push(service);

                // state.total = 0;
                // state.cart.map(ser => {
                //     const extractedPrice = parseInt(ser.price);
                //     if (extractedPrice) {
                //         state.total += extractedPrice;
                //     }
                // })
                //
                // state.qty = state.cart.length;

                return {
                    ...state,
                };

            });
        },

        removeService: (service: Service) => {
            set(state => {

                // state.cart = state.cart.filter(ser => ser.id !== service.id)

                // state.total = 0;
                state.cart.map(ser => {
                    if (ser.price) {
                        state.total += parseInt(ser.price);
                    }
                })

                // state.qty = state.cart.length;
                console.log(state.total)

                return {
                    ...state,
                };
            });
        }
    }),
    {
        name: 'service-storage', // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },

));