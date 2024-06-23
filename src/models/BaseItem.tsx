interface BaseItem {
    id: string;
    name: string;
    description: string;
    is_default: string;  // Consider converting these to boolean or number if applicable
    position: string;
    file_id: string | null;
    seo_url: string | null;
    is_visible: string;  // Consider using boolean for true/false values
    picture_sub_path: string | null;
    picture: string | null;
    picture_path: string | null;
    events: string[];
    events_position: { [key: string]: string };
    units: number[];
    locations: any[]; // Define a more specific type if the structure of locations is known
}