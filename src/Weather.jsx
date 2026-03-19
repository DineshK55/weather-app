import { useState } from "react";
import axios from "axios";

function Weather() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState("");

const getWeather = async () => {

  if(city === ""){
    alert("Please enter a city name");
    return;
  }

  try {

    const apiKey = "0da2d5e57a127d2c0201be480888b537";

    const url =
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    console.log(url); // 👈 add this

    const res = await axios.get(url);

    console.log(res.data); // 👈 add this

    setWeather(res.data.weather[0].main);
    setTemperature(res.data.main.temp);
    setDescription(res.data.weather[0].description);

  } catch (error) {
    console.log(error); // 👈 see exact error
    alert("City not found");
  }
};
  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-500">

      <div className="bg-white shadow-xl rounded-xl p-8 w-[350px] text-center">

        <h1 className="text-3xl font-bold text-gray-800">
          Weather Report
        </h1>

        <p className="text-gray-500 mt-2">
          I can give you a weather report about your city!
        </p>

        <input
          type="text"
          placeholder="Enter city name"
          className="mt-5 w-full border rounded-lg p-3"
          onChange={(e) => setCity(e.target.value)}
        />

        <button
          onClick={getWeather}
          className="mt-5 w-full bg-blue-500 text-white py-2 rounded-lg"
        >
          Get Report
        </button>

        <div className="mt-6 bg-gray-100 p-4 rounded-lg text-left">

          <p className="font-semibold">
            Weather: <span className="font-normal">{weather}</span>
          </p>

          <p className="mt-1 font-semibold">
            Temperature: <span className="font-normal">{temperature} °C</span>
          </p>

          <p className="mt-1 font-semibold">
            Description: <span className="font-normal">{description}</span>
          </p>

        </div>

      </div>

    </div>

  );
}

export default Weather;