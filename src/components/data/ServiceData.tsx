export interface ServiceMap {
    name: string;
    sub: SubCategory[];
    image: string;
    isSelected?: boolean;
}

// Define a type for the sidebar contents object
export interface SubCategory {
    name: string,
    services: Service[]
    isSelected?: boolean;
}

export interface Service {
    title?: string;
    description?: string;
    price?: number;
    time?: string;
    isSelected?: boolean;
    group?: Service[];
}

// export interface DetailedServicesMap {
//     [key: string]: ServiceDetail[];
// }

export enum CATEGORIES {
    ALL = 'Alle',
    HAIRREM = "Haarentfernung",
    FACIAL = "Gesicht",
    TEETH = "Medizinisch und zahnmedizinisch",

}

export enum SUBCATEGORIES {
    COSM_TEETH = "Kosmetische Zahnaufhellung",
    SUGARING = "Damen - Sugaring",
    FACIAL = "Gesichtsbehandlungen",
    BROWS = "Augenbrauen & Wimpernbehandlungen",
    LASER = "Diodenlaser - Dauerhafte Haarentfernung",
    TEETH_BLEACH = "Zahnaufhellung",
}


export const serviceMap: ServiceMap[] = [
    // {
    //     name: CATEGORIES.ALL,
    //     image: "https://nextui.org/images/hero-card.jpeg",
    //     sub: [
    //         {
    //
    //     }
    //         SUBCATEGORIES.COSM_TEETH,
    //         SUBCATEGORIES.SUGARING,
    //         SUBCATEGORIES.FACIAL,
    //         SUBCATEGORIES.BROWS,
    //         SUBCATEGORIES.LASER,
    //         SUBCATEGORIES.TEETH_BLEACH
    //     ]
    // },
    {
        name: CATEGORIES.HAIRREM,
        image: "https://nextui.org/images/hero-card.jpeg",
        sub: [
            {
                name: SUBCATEGORIES.SUGARING,
                services: [
                    {
                        title: "Damen Sugaring - Oberlippe & Kinn",
                        description: "A quick and effective hair removal service using natural sugar paste.",
                        price: 20,
                        isSelected: false,
                        time: "15"
                    },
                    {
                        title: "Damen Sugaring - Arme komplett",
                        description: "An extended sugaring session that includes skin conditioning treatments.",
                        price: 40 ,
                        isSelected: false,
                        time: "25"
                    },
                    {
                        title: "Damen Sugaring - Unterschenkel",
                        description: "An extended sugaring session that includes skin conditioning treatments.",
                        price: 38 ,
                        isSelected: false,
                        time: "25"
                    },
                    {
                        title: "Damen Sugaring - Oberschenkel",
                        description: "An extended sugaring session that includes skin conditioning treatments.",
                        price: 38 ,
                        isSelected: false,
                        time: "30"
                    },
                    {
                        title: "Damen Sugaring - Beine komplett",
                        description: "An extended sugaring session that includes skin conditioning treatments.",
                        price: 38 ,
                        isSelected: false,
                        time: "45"
                    },
                    {
                        title: "Damen Sugaring - Achseln",
                        description: "An extended sugaring session that includes skin conditioning treatments.",
                        price: 65 ,
                        isSelected: false,
                        time: "15"
                    },
                    {
                        title: "Damen Sugaring - Bikini & Achseln",
                        description: "An extended sugaring session that includes skin conditioning treatments.",
                        price: 24 ,
                        isSelected: false,
                        time: "40"
                    },
                    {
                        title: "Damen Sugaring - Intim",
                        description: "An extended sugaring session that includes skin conditioning treatments.",
                        price: 35 ,
                        isSelected: false,
                        time: "30"
                    },
                    {
                        title: "Damen Sugaring - Bikini",
                        description: "An extended sugaring session that includes skin conditioning treatments.",
                        price: 38 ,
                        isSelected: false,
                        time: "30"
                    }
                ]
            },
            {
                name: SUBCATEGORIES.LASER,
                services: [
                    {
                        title: "Dauerhafte Haarentfernung - Gesicht inklusive Hals",
                        description: "A quick and effective hair removal service using natural sugar paste.",
                        price: 40 ,
                        isSelected: false,
                        time: "15 Min."
                    }, {
                        title: "Dauerhafte Haarentfernung - Oberlippe und Kinn",
                        description: "A quick and effective hair removal service using natural sugar paste.",
                        price: 25 ,
                        isSelected: false,
                        time: "15 Min."
                    }, {
                        title: "Dauerhafte Haarentfernung - Rücken komplett",
                        description: "A quick and effective hair removal service using natural sugar paste.",
                        price: 50 ,
                        isSelected: false,
                        time: "30 Min."
                    }, {
                        title: "Dauerhafte Haarentfernung - Achseln",
                        description: "A quick and effective hair removal service using natural sugar paste.",
                        price: 45 ,
                        isSelected: false,
                        time: "25 Min."
                    }, {
                        title: "Dauerhafte Haarentfernung - Arme komplett inklusive Achseln",
                        description: "A quick and effective hair removal service using natural sugar paste.",
                        price: 70 ,
                        isSelected: false,
                        time: "40 Min."
                    }, {
                        title: "Dauerhafte Haarentfernung - Bauch & Brust",
                        description: "A quick and effective hair removal service using natural sugar paste.",
                        price: 55 ,
                        isSelected: false,
                        time: "30 Min."
                    }, {
                        title: "Dauerhafte Haarentfernung - Beine komplett",
                        description: "A quick and effective hair removal service using natural sugar paste.",
                        price: 75 ,
                        isSelected: false,
                        time: "40 Min."
                    }, {
                        title: "Dauerhafte Haarentfernung - Oberschenkel",
                        description: "A quick and effective hair removal service using natural sugar paste.",
                        price: 40 ,
                        isSelected: false,
                        time: "20 Min."
                    }, {
                        title: "Dauerhafte Haarentfernung - Unterschenkel",
                        description: "A quick and effective hair removal service using natural sugar paste.",
                        price: 40 ,
                        isSelected: false,
                        time: "20 Min."
                    }, {
                        title: "Dauerhafte Haarentfernung - Intim",
                        description: "A quick and effective hair removal service using natural sugar paste.",
                        price: 70 ,
                        isSelected: false,
                        time: "30 Min."
                    }, {
                        title: "Dauerhafte Haarentfernung - Ganzkörper",
                        description: "A quick and effective hair removal service using natural sugar paste.",
                        price: 180 ,
                        isSelected: false,
                        time: "1 Std."
                    },
                ]
            }


        ]
    },
    {
        name: CATEGORIES.FACIAL,
        image: "https://nextui.org/images/hero-card.jpeg",
        sub: [
            {
                name: SUBCATEGORIES.FACIAL,
                services: [
                    {
                        title: "Gesichtsbehandlung - Microneedling",
                        description: "A quick and effective hair removal service using natural sugar paste.",
                        price: 99 ,
                        isSelected: true,
                        time: "1 Std."
                    },
                    {

                        title: "Gesichtsbehandlung - Aquafacial",
                        description: "A quick and effective hair removal service using natural sugar paste.",
                        price: 95 ,
                        isSelected: true,
                        time: "30"
                    },
                    {
                        title: "Gesichtsbehandlung - SkinScrubber",
                        description: "A quick and effective hair removal service using natural sugar paste.",
                        price: 80 ,
                        isSelected: true,
                        time: "45"
                    },
                    {
                        title: "Gesichtsbehandlung - BB Glow",
                        description: "A quick and effective hair removal service using natural sugar paste.",
                        time: "30 Min. - 1 Std.",
                        group: [
                            {
                                title: "BB Glow - nur Augenringe",
                                description: "A quick and effective hair removal service using natural sugar paste.",
                                price: 80 ,
                                isSelected: false,
                                time: "30 Min."
                            },
                            {
                                title: "BB Glow",
                                description: "A quick and effective hair removal service using natural sugar paste.",
                                price: 90 ,
                                isSelected: false,
                                time: "1 Std."
                            },
                        ]
                    },
                ]
            },
            {
                name: SUBCATEGORIES.BROWS,
                services: [
                    {
                        title: "Wimpernlifting & Färben",
                        description: "A quick and effective hair removal service using natural sugar paste.",
                        price: 60 ,
                        isSelected: false,
                        time: "1 Std."
                    },
                    {
                        title: "Augenbrauenlifting & Färben",
                        description: "A quick and effective hair removal service using natural sugar paste.",
                        price: 55 ,
                        isSelected: false,
                        time: "1 Std."
                    },
                    {
                        title: "Henna Brows",
                        description: "A quick and effective hair removal service using natural sugar paste.",
                        price: 55 ,
                        isSelected: false,
                        time: "30 Min."
                    },
                    {
                        title: "Wimpern färben",
                        description: "A quick and effective hair removal service using natural sugar paste.",
                        price: 15 ,
                        isSelected: false,
                        time: "15 Min."
                    }, {
                        title: "Augenbrauen färben",
                        description: "A quick and effective hair removal service using natural sugar paste.",
                        price: 15 ,
                        isSelected: false,
                        time: "15 Min."
                    },
                    {
                        title: "Augenbrauen zupfen",
                        description: "A quick and effective hair removal service using natural sugar paste.",
                        price: 15 ,
                        isSelected: false,
                        time: "15 Min."
                    },
                ]
            }
        ]
    },
    {
        name: CATEGORIES.TEETH,
        image: "https://nextui.org/images/hero-card.jpeg",
        sub: [
            {
                name: SUBCATEGORIES.COSM_TEETH,
                services: [
                    {
                        title: "Zahnbleaching",
                        description: "A quick and effective hair removal service using natural sugar paste.",
                        price: 125 ,
                        isSelected: true,
                        time: "45"
                    },
                ]
            },
            {
                name: SUBCATEGORIES.TEETH_BLEACH,
                services: [
                    {
                        title: "Aufrischung innerhalb von 3 Monaten",
                        description: "A quick and effective hair removal service using natural sugar paste.",
                        price: 55 ,
                        isSelected: false,
                        time: "30 Min."
                    },
                    {
                        title: "komplett",
                        description: "A quick and effective hair removal service using natural sugar paste.",
                        price: 125 ,
                        isSelected: false,
                        time: "1 Std."
                    }
                ]
            }
        ]
    }
];