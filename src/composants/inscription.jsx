import React from "react";
import { Link } from 'react-router-dom';
import Images from '../assets/remv2.png'

class Inscription extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       firstname: '',
    //       lastname: '',
    //       date: '',
    //       profession: '',
    //       password:'',
    //       confirme: '',
    //       mail: '',
    //       phone: '',
    //       adress: '',
    //       organisation: ''
    //     };
    //   }
    //   handleChange = (event) => {
    //     this.setState({ [event.target.name]: event.target.value });
    //   };
    //   handleSubmit = (event) => {
    //        event.preventDefault();
    //        console.log('Connexion:', this.state);
    //      };

    render() {
        return (
    
            <div className="container">
                
                <div className="row mt-5">
                <div className="col-lg-4">
                    <img src={Images} alt="" className="imgg"/>
                </div>
                <div className="col-lg-8">
                <form>

                    <div class="row">
                    <h1 className="texte">Inscription</h1>
                        <div class="col-md-6 mb-2">

                            <div  class="form-outline">
                            <label class="form-label" for="firstName">Nom</label>
                                <input type="text" id="firstName" class="form-control form-control-lg" />
                                
                            </div>

                        </div>
                        <div class="col-md-6 mb-2">
                            <div  class="form-outline">
                            <label class="form-label" for="lastName">Prenom</label>
                                <input type="text" id="lastName" class="form-control form-control-lg" />
                            </div>

                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6 mb-2 d-flex align-items-center">

                            <div  class="form-outline datepicker w-100">
                            <label for="birthdayDate" class="form-label">Date de naissance</label>
                                <input type="date" class="form-control form-control-lg" id="birthdayDate" />
                            </div>

                        </div>
                        <div class="col-md-6 mb-2">
                            <div  >
                            <label class="form-label" for="prof">Profession</label>
                                <input type="text" id="prof" class="form-control form-control-lg" />
                            </div>

                        </div>
                    </div>
                        <div class="row">
                        <div class="col-md-6 mb-2">

                            <div  >
                            <label class="form-label" for="motdepass">Definir mot de passe</label>
                                <input type="password" id="motdepass" class="form-control form-control-lg" />
                                
                            </div>

                        </div>
                        <div class="col-md-6 mb-2">
                            <div  >
                            <label class="form-label" for="confirm">Confirmer votre mot de pass</label>
                                <input type="password" id="confirm" class="form-control form-control-lg" />
                            </div>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-2 pb-2">

                            <div  >
                            <label class="form-label" for="emailAddress">E-mail</label>
                                <input type="email" id="emailAddress" class="form-control form-control-lg" />
                            </div>

                        </div>
                        <div class="col-md-6 mb-2 pb-2">

                            <div  >
                            <label class="form-label" for="phoneNumber">Telephone</label>
                                <input type="tel" id="phoneNumber" class="form-control form-control-lg" />
                            </div>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-2 pb-2">

                            <div  >
                            <label class="form-label" for="adress">Adresse</label>
                                <input type="text" id="adress" class="form-control form-control-lg" />
                            </div>

                        </div>
                        <div class="col-md-6 mb-2 pb-2">

                            <div  >
                            <label class="form-label" for="organism">Organisation</label>
                                <input type="text" id="organism" class="form-control form-control-lg" />
                            </div>

                        </div>
                    </div>
                    <div class="mt-2 pt-2 text-center">
                        <Link to="/connexion">
                            <input data-mdb-ripple-init class="btn btn-success btn-lg" type="submit" value="S'incrire" />
                        </Link>
                    </div>
                    <p className="text-center">Vous avez deja un copmte,  <Link to="/connexion">connectez-vous</Link></p>
                </form>
                </div>
                </div>
            </div>
        );
    }
}

export default Inscription;
