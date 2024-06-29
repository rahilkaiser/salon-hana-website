export enum TimeSlotType {
    FREE = 'free',
    PAID = 'paid',
    BUSY = 'busy',
}
export interface TimeSlot {
    id: string;
    date: string;
    time: string;
    type: TimeSlotType;
    slots_count: number;
    client_date: string;
    client_time: string;
    available_slots: number | null;
    total_slots: number | null;
}
