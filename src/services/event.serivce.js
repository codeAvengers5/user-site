import axios from "axios";
const API_URI = "http://localhost:8000/";
axios.defaults.withCredentials = true;
export async function createEvent(formDataToSend) {
    try {
        const response = await axios.post(
            API_URI + `createEvent`,
            formDataToSend,
            {
                withCredentials: true
            }
        );
        return response.data;
    } catch (error) {
        throw error;
    }
}
export const getEventId = async id => {
    try {
        const response = await axios.get(API_URI + `getEvent/${id}`, {
            withCredentials: true
        });
        return response;
    } catch (error) {
        throw error.response.data.error || "Failed to fetch Event by ID";
    }
};
export const getUserEventId = async id => {
    try {
        const response = await axios.get(API_URI + `getuserEvent/${id}`, {
            withCredentials: true
        });
        return response;
    } catch (error) {
        throw error.response.data.error || "Failed to fetch Event by ID";
    }
};
export const updateEventId = async eventData => {
    try {
        const { id, ...data } = eventData;
        const response = await axios.put(API_URI + `updateEvent/${id}`, data, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        throw error.response.data.error || "Failed to update Event";
    }
};
export const deleteEvent = async (id) => {
    return axios.delete(API_URI + `deleteEvent/${id}`, {
        withCredentials: true
    });
}