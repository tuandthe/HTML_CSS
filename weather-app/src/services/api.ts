import type { WeatherData } from "../types/weather";

// 
const API_KEY = '8497028c82fe61e2a8e188bdf616085b';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeatherData = async (city: string) => {
    const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    if (!response.ok) {
        throw new Error('Failed to fetch weather data');
    }
    const data = await response.json();
    return data as WeatherData;
 
}    