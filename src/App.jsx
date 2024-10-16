import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Inscription from "./composants/inscription";
import Connexion from './composants/connexion';
import Accueil from './composants/accueil';
import Utilisateur from "./composants/utilisateur";
import Cotisation from "./composants/cotisation";
import Parametre from "./composants/parametre";

class App extends React.Component {
  render() {
    return (

      <div>
        <Routes>
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/utilisateur" element={<Utilisateur />}/>
        <Route path="/dashbord" element={<Accueil />}/>
        <Route path="/cotisation" element={<Cotisation />}/>
        <Route path="/parametre" element={<Parametre />}/>

        </Routes>
      </div>
    )
  }
}
export default App
