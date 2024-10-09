import React from "react";
import Navebar from "./navebar";
import Sidebar from "./sidebar";
import Contenu from "./contenu";

 class Accueil extends React.Component {
  render() {
    return (
      <div>
        <div className="d-flex">
         <div className="sidbar">
         <Sidebar />
         </div>

          <div className="main">
          <div className="navebar">
              <Navebar />
            </div>
          <div className="contenu">
              <Contenu />
            </div>
          </div>

        </div>
        
      </div>
    )
  }
}

export default Accueil