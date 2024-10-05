import React from "react";
import Img from '../assets/log.png'
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
         <h1 className="">{this.props.text}</h1>
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
         <h3 className="">Connectez-vous</h3>
         <p className="">Connectez-vous et gerez vos cotisations</p>
        <form onSubmit={this.handleSubmit}>
         <div className="mb-3">
             <input
               type="text"
               name="username"
               placeholder="N* telephone"
               value={this.state.username}
               onChange={this.handleChange}
               required
               className="form-control fond w-75"
             />
           
         </div>
         <div className="mb-3">
             <input
               type="password"
               name="password"
               placeholder="Mot de pass"
               value={this.state.password}
               onChange={this.handleChange}
               required
               className="form-control fond w-75 text-white"
             />
          
         </div>
            <Link to="/accueil">
                <button type="submit" className="btn btn-success w-75">Connexion</button>
            </Link>
             <p>Vous n'avez pas de compte  <Link to="/inscription">inscrivez-vous</Link> </p>
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
                <div className="col-lg-8 mt-5">
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