interface Service {
    isSelected: boolean;
    id: string;
    name: string;
    duration: string;
    buffertime_before: string;
    buffertime_after: string;
    hide_duration: string;
    description: string;
    is_public: string;  // Consider using boolean if applicable
    is_active: string;  // Consider using boolean if applicable
    position: string;
    file_id: string | null;
    seo_url: string | null;
    min_time_till_event: string | null;
    max_time_till_event: string | null;
    is_recurring: string;  // Consider using boolean if applicable
    picture: string | null;
    picture_sub_path: string | null;
    is_visible: string;  // Consider using boolean if applicable
    picture_path: string | null;
    price: string;
    plugin_invoice_tax_id: string | null;
    currency: string;
    tax: string | null;
    categories: string[];
    position_in_category: { [key: string]: string };
    classes_plugin_info: {
        unit_group_binded_in_class: string | null;
        unit_groups_binded_in_classes: string[];
    };
}
