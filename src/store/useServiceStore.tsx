import {create} from "zustand";
import {Service, serviceMap, ServiceMap, SubCategory} from "@/components/data/ServiceData";
import {completeServiceMap, createAllCategory} from "@/utils/Utils";

type ServiceStore = {
    qty: number;
    total: number;
    cart: Service[];
    serviceMap: ServiceMap[];
    selectedCategory: ServiceMap;
    selectedSubCategory: SubCategory;

    setSelectedCategory: (category: ServiceMap) => void;
    setSelectedSubcategory: (subCategory: SubCategory) => void;
    addService: (service: Service) => void
    removeService: (service: Service) => void
}


export const useServiceStore = create<ServiceStore>((set, get) => (
    {
        serviceMap: completeServiceMap,
        total: 0,
        qty: 0,
        cart: [],
        selectedCategory: completeServiceMap[0],
        selectedSubCategory: completeServiceMap[0].sub[0],

        setSelectedCategory: (category) => set({selectedCategory: category}),
        setSelectedSubcategory: (subCategory) => set({selectedSubCategory: subCategory}),

        addService: (service) => {
            set(state => {

                state.serviceMap.forEach(cat => {

                    cat.sub.forEach(s => {
                        s.services.forEach(ser => {
                            if (ser.title == service.title) {
                                if (cat.name != 'Alle') {
                                    cat.isSelected = true;
                                }
                                s.isSelected = true;
                                ser.isSelected = true;
                            }
                        })

                    })
                });

                state.cart.push(service);

                state.total = 0;
                state.cart.map(ser => {
                    if(ser.price){
                        state.total += ser.price;
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
                state.serviceMap.forEach(cat => {

                    if (cat.isSelected == true) {
                        cat.sub.forEach((s, index) => {
                                s.services.forEach(ser => {
                                    if (service.title == ser.title) {
                                        const catNumSubSelection = cat.sub.filter(su => su.isSelected == true);
                                        const subNumServicesSelection = s.services.filter(se => se.isSelected == true);
                                        if (subNumServicesSelection.length == 1) {
                                            s.isSelected = false;
                                            if (cat.name != 'Alle' && catNumSubSelection.length == 1) {
                                                cat.isSelected = false;
                                            }
                                        }
                                        ser.isSelected = false;
                                    }
                                })
                        })
                    }
                    state.cart = state.cart.filter(ser => ser.title !== service.title)

                    state.total = 0;
                    state.cart.map(ser => {
                        if(ser.price){
                            state.total += ser.price;
                        }
                    })

                    state.qty = state.cart.length;


                    console.log(state.total)
                });
                return {
                    ...state,
                };
            });
        }
    }));