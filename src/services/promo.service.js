"use client";
import axios from "axios";
axios.defaults.withCredentials = true;
const API_URI = "http://localhost:8000";
const fetchPromo = async () => {
  const response = await axios.get(API_URI + "/getAllPromotions", {
    credentials: "include"
  });
  return response.data;
};

const promoService = {
  fetchPromo
};

export default promoService;
