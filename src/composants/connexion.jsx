import React from "react";
import Img from '../assets/remvbg.png'
import '../App.css';
import { Link } from 'react-router-dom';

// pour l'image
 class Image extends React.Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div>
        <div className="img">
           <img src={this.props.src} alt={this.props.alt} />
        </div>
      </div>
    )
  }
}

// pour le titre
class Titre extends React.Component {
    render() {
      return (
        <div>
         <h1 className="texte fw-bold text-center pb-5">{this.props.text}</h1>
        </div>
      )
    }
  }

// pour la formulaire
class Formulaire extends React.Component {
    constructor(props) {
         super(props);
         this.state = {
           telephone: '',
           motdepass: ''
         };
       }
    render() {
      return (
        <div>
         <h3 className="texte pb-2">Connectez-vous</h3>
         <p className="texte pb-2">Connectez-vous et gerez vos cotisations</p>
        <form onSubmit={this.handleSubmit}>
         <div className="mb-3 pb-2">
             <input
               type="text"
               name="username"
               placeholder="N* telephone"
               value={this.state.username}
               onChange={this.handleChange}
               required
               className="form-control fond w-50"
             />
           
         </div>
         <div className="mb-3 pb-2">
             <input
               type="password"
               name="password"
               placeholder="Mot de pass"
               value={this.state.password}
               onChange={this.handleChange}
               required
               className="form-control fond w-50 text-white"
             />
          
         </div>
         <p className="texte">Mot de passe oublié ?</p>
            <Link to="/accueil">
                <button type="submit" className="btn btn-success w-50">Connexion</button>
            </Link>
             <p className="texte pt-3">Vous n'avez pas de compte  <Link to="/inscription">inscrivez-vous</Link> </p>
       </form>
       </div>
      )
    }
  }

 class Connexion extends React.Component {
    render() {
      return (
        <div>
          <div className="container ">
            <div className="row">
                <div className="col-lg-4">
                    <Image src= {Img} alt="imagee"/>
                </div>
                <div className="col-lg-8 mt-5  texte">
                <Titre text="Bienvenue sur Bakeli-tontine" />
                <Formulaire />
                </div>
            </div>
          </div>
        </div>
      )
    }
  }

export default Connexion