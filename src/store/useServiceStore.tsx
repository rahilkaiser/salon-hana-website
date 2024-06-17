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
                            if(ser.title == service.title) {
                                if(cat.name != 'Alle') {
                                    cat.isSelected = true;
                                }
                                s.isSelected = true;
                                ser.isSelected = true;
                            }
                        })

                    })
                });

                return {
                    ...state,
                };
            });
        },

        removeService: (service: Service) => {
            set(state => {
                state.serviceMap.forEach(cat => {
                    cat.sub.forEach((s, index) => {
                        s.services.forEach(ser => {

                            if(service.title == ser.title) {
                                if(cat.name != 'Alle') {
                                    cat.isSelected = false;
                                }
                                s.isSelected = false;
                                ser.isSelected = false;
                            }
                        })
                    })
                });
                return {
                    ...state,
                };
            });
        }
    }));