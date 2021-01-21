import { useState } from "react";
import { WiHumidity, WiStrongWind } from "react-icons/wi";
import { BiSearchAlt2 } from "react-icons/bi";
import { GoLocation } from "react-icons/go";

const Forecast = () => {
  const [county, setCounty] = useState([]);
  const [municipality, setMunicipality] = useState([]);
  const [error, setError] = useState();
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [temp, setTemp] = useState("");
  const [wind, setWind] = useState("");
  const [humidity, setHumidity] = useState("");
  const [showResults, setShowResults] = useState(false);

  const url = "https://api.opencagedata.com/geocode/v1/json?q=";
  const smhiUrl =
    "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/";
  const key = "527961ee26f54468a0a374c839e9565d";

  const handleSuccess = (pos) => {
    const { latitude, longitude } = pos.coords;

    const lat = parseFloat(latitude).toFixed(4);
    const long = parseFloat(longitude).toFixed(4);

    setLat(lat);
    setLong(long);

    console.log("Latitude is :", lat);
    console.log("Longitude is :", long);

    fetch(`${url}${lat}+${long}&key=${key}`)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((result) => {
        console.log(result);
        const county = result.results[0].components.county;
        const municipality = result.results[0].components.municipality;
        setCounty(county);
        setMunicipality(municipality);
      });
    fetch(`${smhiUrl}lon/${long}/lat/${lat}/data.json`)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((result) => {
        console.log(result);
        const temp = Math.round(result.timeSeries[0].parameters[11].values[0]);
        const wind = result.timeSeries[0].parameters[14].values[0];
        const humidity = result.timeSeries[0].parameters[15].values[0];

        setTemp(temp);
        setWind(wind);
        setHumidity(humidity);
        console.log(temp);
        console.log(wind);
        console.log(humidity);
      });
  };

  const handleError = (error) => {
    setError(error.message);
    console.log(error.message);
  };

  const getGeo = () => {
    const { geolocation } = navigator;
    const options = {
      enableHighAccuracy: true,
      timeout: 1000 * 60 * 1,
      maximumAge: 0,
    };

    if (!geolocation) {
      setError("Geolocation is not supported.");
      return;
    }
    geolocation.getCurrentPosition(handleSuccess, handleError, options);
  };

  const search = (e) => {
    if (!lat && !long) {
      setShowResults(true);
      console.log("Coordinates is empty");
      setCounty("No coordinates given");
    } else {
      setShowResults(true);
      fetch(`${url}${lat}+${long}&key=${key}`)
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((result) => {
          console.log(result);
          const county = result.results[0].components.county;
          const municipality = result.results[0].components.municipality;
          setCounty(county);
          setMunicipality(municipality);
        });

      fetch(`${smhiUrl}lon/${long}/lat/${lat}/data.json`)
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((result) => {
          console.log(result);
          const temp = Math.round(
            result.timeSeries[0].parameters[11].values[0]
          );
          const wind = result.timeSeries[0].parameters[14].values[0];
          const humidity = result.timeSeries[0].parameters[15].values[0];

          setTemp(temp);
          setWind(wind);
          setHumidity(humidity);
          console.log(temp);
          console.log(wind);
          console.log(humidity);
        });
    }
  };

  const getCurrent = () => {
    setShowResults(true);
    getGeo();
  };

  /* useEffect(() => {
    getStandart();
  }); */

  return (
    <div className="main-container">
      <div className="search-section">
        <div className="search-coordinates">
          <span>Search your coordinates :</span>
          <input
            type="text"
            className="search"
            placeholder="Set your latitude"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
          />
          <input
            type="text"
            className="search"
            placeholder="Set your longitude"
            value={long}
            onChange={(e) => setLong(e.target.value)}
          />
          <BiSearchAlt2 className="search-button" onClick={() => search()} />
        </div>
        <div className="current-location">
          <span>Get current location :</span>
          <GoLocation className="target" onClick={() => getCurrent()} />
        </div>
      </div>
      {showResults ? (
        <div className="weather-section">
          <div className="weather">
            <div className="location">
              <h2>{county}</h2>
              <h3>{municipality}</h3>
            </div>
            <div className="options">
              <div className="temp">
                <span>{temp}</span>
                <span className="c">°C</span>
              </div>
              <div className="wi-hu">
                <div className="windspeed">
                  <WiStrongWind className="react-icons" />
                  <span> {wind} m/s</span>
                </div>
                <div className="humidity">
                  <WiHumidity className="react-icons" />
                  <span>{humidity}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Forecast;
