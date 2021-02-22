import React, { useEffect, useState } from "react";
import './App.css';
import axios from "axios";

const App = () => {
    const [city, setCity] = useState();
    const [search, setsearch] = useState('karachi');

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=34fb560878911fc3db61d9944cbe72b4&units=metric`)
            // const resJson = await res.json();
            console.log(res);

            setCity(res);
        }
        getData();
    }, [search]);
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        className="inputField"
                        value={search}
                        onChange={(events) => { setsearch(events.target.value); }} />
                </div>

                {!city ? (
                    <p className="errorMsg">No Data Found</p>
                ) : (
                        <div className="info">
                            <br />
                            <h2 className="location"> {search} </h2>
                            <br />
                            <h1 className="temp"> {city.data.main.temp}<sup>°C</sup></h1>
                            <p>Feel Like: {city.data.main.feels_like} </p>
                            <br />
                            <h3 className="tempmin_max">Min : {city.data.main.temp} | Max : {city.data.main.temp}</h3>
                            <br />
                            <h4> {city.data.weather[0].description} </h4>
                            <br />
                            <p>Humidity: {city.data.main.humidity}%</p>
                        </div>
                    )}
            </div>

        </>
    );
}
export default App;


