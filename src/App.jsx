import Location from "./components/Location";
import ResidentInfo from "./components/ResidentInfo";
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import "./App.css";

function App() {
  const [location, setLocation] = useState({});
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const random = Math.floor(Math.random() * 126) + 1
    axios
      .get(`https://rickandmortyapi.com/api/location/${random}`)
      .then((res) => setLocation(res.data))
      .catch((error) => console.log(error));
  }, []);

  const searchLocation = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${searchValue}`)
      .then((res) => setLocation(res.data));
  };

  console.log(location);

  return (
    <div className="App" >
      
      <img className="front_page" src="https://i.ibb.co/sj7LSFC/Portada-Ricky-Morty-web.jpg" alt="" />
      <div className="location">
      <Location
        location={location}
        searchValue={searchValue}
        searchLocation={searchLocation}
        setLocation={setLocation}
        setSearchValue={setSearchValue}
      />
      </div>

      <div className="character-container">
      
        {location.residents?.map((resident) => (
         <ResidentInfo  resident ={resident}  key ={resident}/>
        ))}
      
      </div>
   </div>
  );
}

export default App;
