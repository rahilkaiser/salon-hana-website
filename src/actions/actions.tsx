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
export const getEvents = async  (token:string | null) => {
    const companyLogin = process.env.NEXT_PUBLIC_COMPANY_LOGIN;

    if (!token) {
        console.error("No token available.");
        return;
    }

    const apiClient = axios.create({
        baseURL: 'https://user-api.simplybook.me',
        headers: {
            'X-Company-Login': companyLogin,
            'X-Token': token,
        },
    });

    try {
        const response = await apiClient.post('/', {
            jsonrpc: '2.0',
            method: 'getEventList',
            id: 1
        });
        return response.data.result;
    } catch (error) {
        console.error('Error fetching events:', error);
    }
}

/** Get The Workers
 *
 * @param token
 */
export const getWorkers = async  (token:string | null) => {
    const companyLogin = process.env.NEXT_PUBLIC_COMPANY_LOGIN;

    if (!token) {
        console.error("No token available.");
        return;
    }

    const apiClient = axios.create({
        baseURL: 'https://user-api.simplybook.me',
        headers: {
            'X-Company-Login': companyLogin,
            'X-Token': token,
        },
    });

    try {
        const response = await apiClient.post('/', {
            jsonrpc: '2.0',
            method: 'getUnitList',
            id: 1
        });
        return response.data.result;
    } catch (error) {
        console.error('Error fetching events:', error);
    }
}

/** Get The Workers
 *
 * @param token
 */
export const getCategories = async  (token:string | null) => {
    const companyLogin = process.env.NEXT_PUBLIC_COMPANY_LOGIN;

    if (!token) {
        console.error("No token available.");
        return;
    }

    const apiClient = axios.create({
        baseURL: 'https://user-api.simplybook.me',
        headers: {
            'X-Company-Login': companyLogin,
            'X-Token': token,
        },
    });

    try {
        const response = await apiClient.post('/', {
            jsonrpc: '2.0',
            method: 'getCategoriesList',
            id: 1
        });
        return response.data.result;
    } catch (error) {
        console.error('Error fetching events:', error);
    }
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

