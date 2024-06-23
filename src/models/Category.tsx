interface Category {
    isSelected: boolean;
    id: string;
    name: string;
    description: string;
    is_default: string;  // Consider using boolean if applicable
    position: string;
    file_id: string | null;
    seo_url: string | null;
    is_visible: string;  // Consider using boolean if applicable
    picture_sub_path: string | null;
    picture: string | null;
    picture_path: string | null;
    events: string[];
    events_position: { [key: string]: string };
    units: number[];
    locations: any[];  // Define more specifically if known
}
