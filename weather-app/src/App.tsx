import { useState } from 'react'
import './App.css'
import type { WeatherData } from './types/weather'
import { fetchWeatherData } from './services/api'
import { SearchBar } from './components/SearchBar'
import { WeatherCard } from './components/WeatherCard'

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleSearch = async (city: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchWeatherData(city);
      setWeather(data);
    } catch (error) {
      setError('Không tìm thấy thành phố hoặc lỗi mạng.');
      setWeather(null);
    }finally {
      setLoading(false);
    }
  };


  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-indigo-600 flex flex-col items-center pt-20 px-4">
      <h1 className="text-4xl font-bold text-white mb-8 drop-shadow-md">
        Dự báo thời tiết 🌤️
      </h1>

      <SearchBar onSearch={handleSearch} />

      {/* Hiển thị Loading */}
      {loading && <div className="mt-8 text-white text-xl animate-pulse">Đang tải dữ liệu...</div>}

      {/* Hiển thị Lỗi */}
      {error && <div className="mt-8 bg-red-100 text-red-700 p-4 rounded-lg">{error}</div>}

      {/* Hiển thị Kết quả */}
      {weather && <WeatherCard data={weather} />}
    </div>
    </>
  )
}

export default App
