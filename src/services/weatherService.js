// src/services/weatherService.js

const API_KEY = '';
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

const show = async (city) => {
    try {
        const queryString = `&q=${city}`;
        const res = await fetch(BASE_URL + queryString);
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export {show}; //named export syntax