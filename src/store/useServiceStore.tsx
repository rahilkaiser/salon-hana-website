import {create} from "zustand";
import {Service, serviceMap, ServiceMap, SubCategory} from "@/components/data/ServiceData";
import {completeServiceMap} from "@/utils/Utils";
import Services from "@/app/services/page";

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
    removeService: () => void
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
                const {selectedCategory, selectedSubCategory} = state;

                // Update the services within the selected SubCategory
                selectedSubCategory.isSelected = true;
                const updatedServices = selectedSubCategory.services.map(s =>
                    s.title === service.title ? {...s, isSelected: !s.isSelected} : s
                );

                // Create a new SubCategory with updated services
                const updatedSubCategory =
                    {...selectedSubCategory, services: updatedServices};


                selectedCategory.isSelected = true;
                // Update the list of subcategories in the selected category
                const updatedSubCategories = selectedCategory.sub.map(sub =>
                    sub.name === selectedSubCategory.name ? updatedSubCategory : sub
                );

                const updatedCategory = {...selectedCategory, sub: updatedSubCategories};

                // Update the list of subcategories in the selected category
                const updatedCategories = state.serviceMap.map(cate =>
                    cate.name === selectedCategory.name ? updatedCategory : cate
                );

                if (selectedCategory.name == 'Alle') {
                    updatedCategories.forEach(c => {
                        c.sub.forEach((s, index) => {
                            if (s.name == selectedSubCategory.name && c.name != 'Alle') {
                                c.isSelected = true;
                                s.services.forEach(ser => {
                                    if (service.title == ser.title) {
                                        ser.isSelected = true;
                                    }
                                })
                            }
                            if (s.name == selectedSubCategory.name) {
                                s.isSelected = true;
                            }
                        })
                    })
                }else {
                    updatedCategories.forEach(c => {
                        c.sub.forEach((s, index) => {

                            if (s.name == selectedSubCategory.name) {
                                s.services.forEach(ser => {
                                    if (service.title == ser.title) {
                                        ser.isSelected = true;
                                    }
                                })
                            }
                        })
                    })
                }

                return {
                    ...state,
                    serviceMap: [...updatedCategories],
                    selectedCategory: updatedCategory,
                    selectedSubCategory: updatedSubCategory
                };
            });
        },

        removeService: () => {

        }

    }));