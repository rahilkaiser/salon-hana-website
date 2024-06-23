import {create} from "zustand";
import {getCategories, getEvents} from "@/actions/actions";
import {useAuthStore} from "@/store/authStore";

type ServiceStore = {
    qty: number;
    total: number;
    cart: Service[];
    selectedCategory: Category | null;
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


export const useServiceStore = create<ServiceStore>((set, get) => (
    {
        total: 0,
        qty: 0,
        cart: [],
        selectedCategory: null,
        categories: [],
        services: [],
        categoriesIsLoading: false,
        servicesIsLoading: false,

        fetchCategories: async () => {
            get().categoriesIsLoading = true;
            await useAuthStore.getState().fetchToken();
            const token = useAuthStore.getState().token;
            if (token) {
                const res = await getCategories(token);
                console.log("Cate", res)
                const cats = Object.values(res) as Category[];
                set({
                    categoriesIsLoading: false,
                    categories: cats,
                    selectedCategory: cats[0],
                });
            }
        },

        fetchEvents: async () => {
            get().servicesIsLoading = true;
            await useAuthStore.getState().fetchToken();
            const token = useAuthStore.getState().token;
            if (token) {
                const res = await getEvents(token);
                console.log("Services", res)
                set({
                    servicesIsLoading: false,
                    services: Object.values(res)
                });
            }
        },
        setSelectedCategory: (category) => {
            set({selectedCategory: category})
        },

        addService: (service) => {
            set(state => {

                state.cart.push(service);

                state.total = 0;
                state.cart.map(ser => {
                    const extractedPrice = parseInt(ser.price);
                    if (extractedPrice) {
                        state.total += extractedPrice;
                    }
                })

                state.qty = state.cart.length;

                return {
                    ...state,
                };

            });
        },

        removeService: (service: Service) => {
            set(state => {

                state.cart = state.cart.filter(ser => ser.id !== service.id)

                state.total = 0;
                state.cart.map(ser => {
                    if(ser.price){
                        state.total += parseInt(ser.price);
                    }
                })

                state.qty = state.cart.length;
                console.log(state.total)

                return {
                    ...state,
                };
            });
        }
    }));


// if(state.selectedCategory.name != CATEGORIES.PACKAGE) {
//     state.serviceMap.forEach(cat => {
//
//         cat.sub.forEach(s => {
//             s.services.forEach(ser => {
//                 if (ser.title == service.title) {
//                     if (cat.name != 'Alle') {
//                         cat.isSelected = true;
//                     }
//                     s.isSelected = true;
//                     ser.isSelected = true;
//                 }
//             })
//
//         })
//     });
//
// } else {
//     state.packages.sub.forEach(s => {
//         s.services.forEach(ser => {
//             if (ser.title == service.title) {
//                 state.packages.isSelected = true;
//                 s.isSelected = true;
//                 ser.isSelected = true;
//             }
//         })
//     })
// }



// if(state.selectedCategory.name != CATEGORIES.PACKAGE) {
//     state.serviceMap.forEach(cat => {
//         if (cat.isSelected == true) {
//             cat.sub.forEach((s, index) => {
//                 s.services.forEach(ser => {
//                     if (service.title == ser.title) {
//                         const catNumSubSelection = cat.sub.filter(su => su.isSelected == true);
//                         const subNumServicesSelection = s.services.filter(se => se.isSelected == true);
//                         if (subNumServicesSelection.length == 1) {
//                             s.isSelected = false;
//                             if (cat.name != 'Alle' && catNumSubSelection.length == 1) {
//                                 cat.isSelected = false;
//                             }
//                         }
//                         ser.isSelected = false;
//                     }
//                 })
//             })
//         }
//     });
// } else {
//     state.packages.sub.forEach(s => {
//         s.services.forEach(ser => {
//             if(service.title == ser.title) {
//                 const catNumSubSelection = state.packages.sub.filter(su => su.isSelected == true);
//                 const subNumServicesSelection = s.services.filter(se => se.isSelected == true);
//                 if (subNumServicesSelection.length == 1) {
//                     s.isSelected = false;
//                     if (catNumSubSelection.length == 1) {
//                         state.packages.isSelected = false;
//                     }
//                 }
//                 ser.isSelected = false;
//             }
//         })
//     })
// }