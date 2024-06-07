import axios from "axios";
const API_URI = "http://localhost:8000/";
axios.defaults.withCredentials = true;
export async function createEvent(formDataToSend) {
  console.log(formDataToSend);
  try {
    const response = await axios.post(API_URI + `createEvent`, formDataToSend, {
      withCredentials: true
    });
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
    return response.data;
  } catch (error) {
    throw error.response.data.error || "Failed to fetch Event by ID";
  }
};
export async function getUserEventId() {
  try {
    const response = await axios.get(API_URI + `getuserEvent`, {
      withCredentials: true
    });
    return response.data; // Return only the data, not the entire response object
  } catch (error) {
    throw error.response.data.error || "Failed to fetch Event by ID";
  }
}
export const updateEventId = async( event) => {
  try {
    const { updateventId, ...eventData } = event;
    const response = await axios.put(API_URI + `updateEvent/${updateventId}`, eventData, {
      withCredentials: true
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error.response.data.error || "Failed to update Event";
  }
};
export const deleteEvent = async id => {
  return axios.delete(API_URI + `deleteEvent/${id}`, {
    withCredentials: true
  });
};
