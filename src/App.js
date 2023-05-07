//Commons import
import { useState } from "react";
import axios from "axios";

//CSS
import "./App.css";

//Componentes
import Cards from "./components/Cards/Cards.jsx";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";


//Rooter-Dom
import { Routes, Route } from "react-router-dom";
import PathRoutes from "./components/helpers/Routes.helper";
import Detail from "./components/Detail/Detail";


function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== Number(id)));
  };

  return (
    <div className="App">
      <NavBar onSearch={onSearch} />
      <Routes>
        <Route path={PathRoutes.HOME} element={<Cards characters={characters} onClose={onClose} />}/>
        <Route path={PathRoutes.ABOUT} element={<About />} />
        <Route path={PathRoutes.DETAIL} element={<Detail />} />

      
      </Routes>

      {/* <NavBar onSearch ={ onSearch}  />
         <Cards characters={characters} onClose={onClose} /> */}
    </div>
  );
}

export default App;
