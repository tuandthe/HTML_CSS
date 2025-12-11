import type { WeatherData } from "../types/weather";

interface WeatherCardProps {
    data: WeatherData;
}
export const WeatherCard = ({ data }: WeatherCardProps) => {
    return (
       <div className="mt-8 bg-white p-6 rounded-xl shadow-lg w-full max-w-md text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{data.name}</h2>
            
            <div className="flex justify-center items-center">
                <img 
                    src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
                    alt="icon" 
                    className="w-20 h-20"
                />
                <span className="text-5xl font-bold text-gray-900">
                    {Math.round(data.main.temp)}°C
                </span>
            </div>

            <p className="text-gray-600 capitalize text-lg mb-4">
                {data.weather[0].description}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-4 border-t pt-4">
                <div className="flex flex-col">
                    <span className="text-gray-500 text-sm">Độ ẩm</span>
                    <span className="font-semibold text-gray-700">{data.main.humidity}%</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-gray-500 text-sm">Gió</span>
                    <span className="font-semibold text-gray-700">{data.wind.speed} m/s</span>
                </div>
            </div>
        </div>
    );
}