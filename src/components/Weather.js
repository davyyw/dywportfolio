import { useState, useEffect } from 'react';
const ImagesPath = process.env.PUBLIC_URL + '/images/';
const apiWeather =  "https://api.openweathermap.org/data/2.5/weather?q=Vancouver,CA&units=metric&appid=dcaab0d8ecfd0e8a4f55836f1a0fd200";
const apiPhoto = "https://api.unsplash.com/photos/random/?count=1&orientation=landscape&client_id=KX6rJI9SUJSS-1WTajEJgu25c_x2ZpH7phFb3G99rwM";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [timeToShow, setTime] = useState(null);

  useEffect(()=>{
    setInterval(()=>{
        const timeGot = new Date();
        setTime(timeGot.toLocaleTimeString());
    },1000);
  },[])

  useEffect(() => {
    function fetchData() {
        fetch(apiWeather)
          .then(res => res.json())
          .then(result => {
            setWeather(result);
            console.log(result);
          });
        }
    fetchData();
    }, [])

    useEffect(() => {
        function fetchPhoto() {
            fetch(apiPhoto)
              .then(res => res.json())
              .then(result => {
                setPhoto(result);
                console.log(result);
                console.log(photo[0].urls.regular);
              });
            }
        fetchPhoto();
        }, [])

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    (photo!=null && weather!=null) && 
    <div className="backPhoto"
    style={{ 
        backgroundImage: `url(${photo[0].urls.regular})` ,
    }}>
        <div className="shadeArea">

            <div>
            <div className="location-box">
                <div className="location">{weather.name}, {weather.sys.country}</div>
                <div className="date">{dateBuilder(new Date())}</div>
                {timeToShow!=null && <div className="minutes">{timeToShow}</div>}
            </div>
            <div className="weather-box">
                <div className="temp">
                {Math.round(weather.main.temp)}°c
                </div>
                <div className="weather">{weather.weather[0].main}</div>
            </div>
            </div>

        </div>
    </div>
  );
}

export default Weather;
