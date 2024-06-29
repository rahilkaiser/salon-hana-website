interface Worker {
    id: string;
    name: string;
    description: string | null;
    phone: string;
    email: string | null;
    station_id: string;
    qty: string;
    is_active: string;
    position: string;
    is_visible: string;
    file_id: string | null;
    seo_url: string | null;
    picture: string | null;
    picture_sub_path: string | null;
    picture_path: string | null;
    classes_plugin_info: {
        event_binded_in_class: string | null;
        events_binded_in_classes: string[];
    };
}
