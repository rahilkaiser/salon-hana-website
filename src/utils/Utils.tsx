export function formatDate(d:Date) {
    var month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

export function addDurationToTime(clientTime: string, durationInMinutes: number): string {
    // Split client_time into hours and minutes
    const [hoursStr, minutesStr] = clientTime.split(':');
    const hours = parseInt(hoursStr, 10);
    const minutes = parseInt(minutesStr, 10);

    // Calculate new minutes
    const totalMinutes = hours * 60 + minutes + durationInMinutes;

    // Calculate new hours and minutes
    const newHours = Math.floor(totalMinutes / 60);
    const newMinutes = totalMinutes % 60;

    // Format new hours and minutes into HH:mm format
    const formattedHours = String(newHours).padStart(2, '0');
    const formattedMinutes = String(newMinutes).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}`;
}

export function isTimeBefore(time1: string, time2: string): boolean {
    // Split time strings into hours and minutes
    const [hours1, minutes1] = time1.split(':').map(Number);
    const [hours2, minutes2] = time2.split(':').map(Number);

    // Compare hours
    if (hours1 < hours2) {
        return true;
    } else if (hours1 > hours2) {
        return false;
    }

    // If hours are equal, compare minutes
    return minutes1 < minutes2;
}


// export const createAllCategory = (serviceMaps: ServiceMap[]): ServiceMap => {
//     let allSubCategories: SubCategory[] = [];
//
//     serviceMaps.forEach(category => {
//         allSubCategories = allSubCategories.concat(category.sub);
//     });
//
//     return {
//         name: CATEGORIES.ALL,
//         image: "https://nextui.org/images/hero-card.jpeg", // Set a default or specific image for "All" category
//         sub: allSubCategories
//     };
// }
//
// export const completeServiceMap: ServiceMap[] = [createAllCategory(serviceMap), ...serviceMap];