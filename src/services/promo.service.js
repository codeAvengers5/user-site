"use client";
import axios from "axios";
axios.defaults.withCredentials = true;
const API_URI = process.env.NEXT_PUBLIC_API_URI

const fetchPromo = async () => {
  const response = await axios.get(API_URI + "getAllPromotions", {
    withCredentials: true
  });
  return response.data;
};

const promoService = {
  fetchPromo
};

export default promoService;
