import {CATEGORIES, serviceMap, ServiceMap, SubCategory} from "@/components/data/ServiceData";

const createAllCategory = (serviceMaps: ServiceMap[]): ServiceMap => {
    let allSubCategories: SubCategory[] = [];

    serviceMaps.forEach(category => {
        allSubCategories = allSubCategories.concat(category.sub);
    });

    return {
        name: CATEGORIES.ALL,
        image: "https://nextui.org/images/hero-card.jpeg", // Set a default or specific image for "All" category
        sub: allSubCategories
    };
}

export const completeServiceMap: ServiceMap[] = [createAllCategory(serviceMap), ...serviceMap];