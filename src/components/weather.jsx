import React, { useState } from "react";
import { toast } from "react-toastify";

const Weather = () => {
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [weather, setWeather] = useState("");
  const [humidity, setHumidity] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  const [temperature, setTemperature] = useState("");
  const [feels, setFeels] = useState("");
  const [windSpeed, setWindspeed] = useState("");
  const [visiblity, setVisiblity] = useState("");

  let api_key = "9fe80dd85c365913b0561c110f07c6be";
  const search = async () => {
    if (city.trim() !== "") {
      console.log(city);
      let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
      let response = await fetch(URL);
      let data = await response.json();
      if(data.cod==="404"){
        console.log("hii");
        toast.error(data.message)
      }
      console.log(data);
      setTemperature(Number((data.main.temp - 273.15).toFixed(2)));
      setFeels(Number((data.main.feels_like - 273.15).toFixed(2)));
      setName(data.name);
      setHumidity(data.main.humidity);
      setSunrise(new Date(data.sys.sunrise * 1000).toLocaleTimeString());
      setSunset(new Date(data.sys.sunset * 1000).toLocaleTimeString());
      setWindspeed(data.wind.speed);
      setWeather(data.weather[0].main);
      setVisiblity((data.visibility / 1000));


      setCity("");
    } else {
      toast.error("Please enter some city");
    }
  };

  const another = () => {
    setFeels("");
    setTemperature("");
  };
  return (
    <div
      style={{
        backgroundImage: "url('https://wallpapercave.com/wp/7rhrsIf.jpg')",
        height: "720px",
      }}
    >
      {!temperature ? (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "60vh",
            minWidth: "100vw",
            margin: 0,
          }}>
          <label
            htmlFor="price"
            className="block text-sm font-medium leading-6 text-gray-900"
            style={{ fontSize: "42px", color: "white", fontFamily: "cursive" }}
          >
            City
          </label>
          <div className="relative mt-2 rounded-md shadow-sm" style={{marginTop:"15px", marginBottom:"15px"}} >
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
          </div>
          <button onClick={search}>Search</button>
        </div>
      ) : (
        <>
        
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "60vh",
              minWidth: "100vw",
              margin: 0,
            }}
          >
            <label
            htmlFor="price"
            className="block text-sm font-medium leading-6 text-gray-900"
            style={{ fontSize: "42px", color: "white", fontFamily: "cursive" }}
          >
            {name} <button onClick={another}>Search another city</button>
          </label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "30vh",
                minWidth: "100vw",
                margin: 0,
              }}
            >
              {/* main grid starts */}
              <div
                style={{
                  height: "200px",
                  width: "300px",
                  backgroundColor: "#b0bee4",
                  borderRight: "black 1px solid",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div>
                  <h2 style={{ fontFamily: "cursive" }}>Temperature</h2>
                </div>
                <div style={{ fontSize: "42px" }}>{temperature} °C</div>
              </div>
              <div
                style={{
                  height: "200px",
                  width: "300px",
                  backgroundColor: "#b0bee4",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div>
                  <h2 style={{ fontFamily: "cursive" }}>Feels like</h2>
                </div>
                <div style={{ fontSize: "42px" }}>{feels} °C</div>
              </div>
              {/* main grid ends */}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "60vh",
                minWidth: "100vw",
                margin: 0,
              }}
            >
                {/* column 1 */}
              <div>
                {/* column 1.1 */}
                <div
                  style={{
                    height: "100px",
                    width: "100px",
                    backgroundColor: "#b0bee4",
                    borderRight: "black 1px solid",
                    borderBottom: "black 1px solid",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div>
                    <h4 style={{ fontFamily: "cursive" }}>Humidity</h4>
                  </div>
                  <div style={{ fontSize: "24px" }}>{humidity} %</div>
                </div>
                {/* column 1.2 */}
                <div
                  style={{
                    height: "100px",
                    width: "100px",
                    backgroundColor: "#b0bee4",
                    borderRight: "black 1px solid",
                    borderBottom: "black 1px solid",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div>
                    <h4 style={{ fontFamily: "cursive" }}>Wind</h4>
                  </div>
                  <div style={{ fontSize: "24px" }}>{windSpeed} m/s</div>
                </div>
                {/* column 1.3 */}
                <div
                  style={{
                    height: "100px",
                    width: "100px",
                    backgroundColor: "#b0bee4",
                    borderRight: "black 1px solid",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div>
                    <h4 style={{ fontFamily: "cursive" }}>Sunrise</h4>
                  </div>
                  <div style={{ fontSize: "18px" }}>{sunrise} </div>
                </div>
              </div>
              {/* column 2 */}
              <div>
                {/* column 2.1 */}
              <div
                  style={{
                    height: "100px",
                    width: "100px",
                    backgroundColor: "#b0bee4",
                    borderBottom: "black 1px solid",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div>
                    <h4 style={{ fontFamily: "cursive" }}>Weather</h4>
                  </div>
                  <div style={{ fontSize: "24px" }}>{weather} </div>
                </div>
                {/* column 2.2 */}
                <div
                  style={{
                    height: "100px",
                    width: "100px",
                    backgroundColor: "#b0bee4",
                    borderBottom: "black 1px solid",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div>
                    <h4 style={{ fontFamily: "cursive" }}>Visiblity</h4>
                  </div>
                  <div style={{ fontSize: "20px" }}>{visiblity} kms</div>
                </div>
                {/* column 2.3 */}
                <div
                  style={{
                    height: "100px",
                    width: "100px",
                    backgroundColor: "#b0bee4",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div>
                    <h4 style={{ fontFamily: "cursive" }}>Sunset</h4>
                  </div>
                  <div style={{ fontSize: "19px" }}>{sunset}</div>
                </div>
              </div>
              
            </div>
          </div>

          
        </>
      )}
    </div>
  );
};

export default Weather;
