"use server"

import axios from "axios";
import jsonrpc from "jsonrpc-lite";

/** Gets the Token to access the api
 *
 */
export const getToken = async  () => {
    const companyLogin = process.env.NEXT_PUBLIC_COMPANY_LOGIN;
    const apiKey = process.env.SIMPLYBOOK_API_KEY;

    const apiClient = axios.create({
        baseURL: 'https://user-api.simplybook.me/login',
        headers: {'Content-Type': 'application/json'},
        method: 'GET',
    });

    const payload = jsonrpc.request(1, 'getToken', [companyLogin, apiKey]);

    try {
        const response = await apiClient.post('', JSON.stringify(payload));
        return response.data.result;

    } catch (error) {
        console.error('Error fetching token:', error);
        throw error;
    }
}

/** Gets the Services
 *
 * @param token
 */
export const getEvents = (maxRetries = 3) => {
    const url = 'https://sugarbeautyroomberlin.simplybook.it/v2/service/';
    let attempts = 0;

    const fetchEvents = (resolve, reject) => {
        if (attempts >= maxRetries) {
            reject(new Error('Max retries reached, giving up.'));
            return;
        }

        attempts++;
        fetch(url, { method: 'GET' })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (data) {
                    resolve(data);
                } else {
                    throw new Error('No data received, retrying...');
                }
            })
            .catch(error => {
                console.error(`Attempt ${attempts} failed: ${error.message}`);
                setTimeout(() => fetchEvents(resolve, reject), 1000 * attempts);
            });
    };

    return new Promise(fetchEvents);
}



export const getWorkers = async  () => {
    const companyLogin = process.env.NEXT_PUBLIC_COMPANY_LOGIN;

    // if (!token) {
    //     console.error("No token available.");
    //     return;
    // }

    // const apiClient = axios.create({
    //     baseURL: 'https://user-api.simplybook.me',
    //     headers: {
    //         'X-Company-Login': companyLogin,
    //         'X-Token': token,
    //     },
    // });

    try {
        // const response = await apiClient.post('/', {
        //     jsonrpc: '2.0',
        //     method: 'getUnitList',
        //     id: 1
        // });
        // return response.data.result;

        return await fetch('https://sugarbeautyroomberlin.simplybook.it/v2/provider/',{method:'GET'}).then(response => response.json());
    } catch (error) {
        console.error('Error fetching events:', error);
    }
}

/** Get The Workers
 *
 * @param token
 */
export const getCategories = (maxRetries = 3) => {
    const companyLogin = process.env.NEXT_PUBLIC_COMPANY_LOGIN;
    const url = 'https://sugarbeautyroomberlin.simplybook.it/v2/ext/category/';
    let attempts = 0;

    const fetchCategories = (resolve, reject) => {
        if (attempts >= maxRetries) {
            reject(new Error('Max retries reached, giving up.'));
            return;
        }

        attempts++;
        fetch(url, { method: 'GET' })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (data) {
                    resolve(data);
                } else {
                    throw new Error('No data received, retrying...');
                }
            })
            .catch(error => {
                console.error(`Attempt ${attempts} failed: ${error.message}`);
                setTimeout(() => fetchCategories(resolve, reject), 1000 * attempts);
            });
    };

    return new Promise(fetchCategories);
}


/**
 * Fetches available booking days for a specified service, provider, and date range.
 * This function makes a GET request to the SimplyBook API endpoint.
 *
 * @param categoryId The ID of the category to filter the booking days.
 * @param serviceId The ID of the service to filter the booking days.
 * @param providerId The ID of the provider to filter the booking days, can be 'any' or a specific provider's ID.
 * @param dateFrom The start date of the range for which to fetch booking days, formatted as 'YYYY-MM-DD'.
 * @param dateTo The end date of the range for which to fetch booking days, formatted as 'YYYY-MM-DD'.
 * @returns A promise that resolves to the JSON data of the booking days or an error if the fetch fails.
 *
 */
// export const getBookingDays = async  (
//     categoryId:number,
//     serviceId:number,
//     providerId:number | null,
//     dateTo: string,
//     dateFrom: string,
// ) => {
//     const companyLogin = process.env.NEXT_PUBLIC_COMPANY_LOGIN;
//
//     try {
//         const provider = providerId ? providerId : 'any';
//         return await fetch(`https://sugarbeautyroomberlin.simplybook.it/v2/booking/working-days/?from=${dateFrom}&to=${dateTo}&provider=${provider}&service=${serviceId}&location=&category=${categoryId}&booking_id=`).then(response => response.json());
//     } catch (error) {
//         console.error('Error fetching events:', error);
//     }
// }

// export const getFreeTimeSlots = async  (
//     serviceId:number,
//     dateTo: string,
//     dateFrom: string,
// ) => {
//     const companyLogin = process.env.NEXT_PUBLIC_COMPANY_LOGIN;
//
//
//     // 'https://sugarbeautyroomberlin.simplybook.it/v2/booking/time-slots/?from=2024-07-01&to=2024-07-07&location=&provider=3&service=60&count=1&booking_id='
//
//     try {
//         const provider = 'any';
//
//         return await fetch(`https://sugarbeautyroomberlin.simplybook.it/v2/booking/time-slots/?from=${dateFrom}&to=${dateTo}&provider=${provider}&service=${serviceId}`).then(response => response.json());
//     } catch (error) {
//         console.error('Error fetching events:', error);
//     }
// }

export const getFreeTimeSlots = (serviceId, dateTo,dateFrom, maxRetries = 3) => {
    const companyLogin = process.env.NEXT_PUBLIC_COMPANY_LOGIN;
    const url = `https://sugarbeautyroomberlin.simplybook.it/v2/booking/time-slots/?from=${dateFrom}&to=${dateTo}&provider=any&service=${serviceId}`;
    let attempts = 0;

    const fetchTimeSlots = (resolve, reject) => {
        if (attempts >= maxRetries) {
            reject(new Error('Max retries reached, giving up.'));
            return;
        }

        attempts++;
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (data) {
                    resolve(data);
                } else {
                    throw new Error('No data received, retrying...');
                }
            })
            .catch(error => {
                console.error(`Attempt ${attempts} failed: ${error.message}`);
                setTimeout(() => fetchTimeSlots(resolve, reject), 1000 * attempts);
            });
    };

    return new Promise(fetchTimeSlots);
}



/** Google Maps Registration
 *
 * @constructor
 */
// actions/mapActions.ts
export const loadGoogleMaps = async () => {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY; // Ensure this is set in your environment variables

    if (!apiKey) {
        throw new Error('Google Maps API key is not set in environment variables');
    }

    // You can add any additional server-side logic here if needed
    return apiKey;
};

