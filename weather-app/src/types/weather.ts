// 
// src/types/weather.ts

export interface WeatherData {
    name: string; // City name
    main: {
        temp: number;
        humidity: number;
    };
    weather: {
        description: string;
        icon: string;
    }[];
    wind: {
        speed: number;
    }
}