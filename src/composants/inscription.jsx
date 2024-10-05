import React from "react";
import { Link } from 'react-router-dom';
import Images from '../assets/images.png'

class Inscription extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Inscription</h1>
                <div className="row mt-5">
                <div className="col-lg-4">
                    <img src={Images} alt="" className="img"/>
                </div>
                <div className="col-lg-8">
                <form>

                    <div class="row">
                        <div class="col-md-6 mb-4">

                            <div data-mdb-input-init class="form-outline">
                            <label class="form-label" for="firstName">Nom</label>
                                <input type="text" id="firstName" class="form-control form-control-lg" />
                                
                            </div>

                        </div>
                        <div class="col-md-6 mb-4">

                            <div data-mdb-input-init class="form-outline">
                            <label class="form-label" for="lastName">Prenom</label>
                                <input type="text" id="lastName" class="form-control form-control-lg" />
                            </div>

                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6 mb-4 d-flex align-items-center">

                            <div data-mdb-input-init class="form-outline datepicker w-100">
                                <input type="text" class="form-control form-control-lg" id="birthdayDate" />
                                <label for="birthdayDate" class="form-label">Birthday</label>
                            </div>

                        </div>
                        <div class="col-md-6 mb-4">

                            <h6 class="mb-2 pb-1">Gender: </h6>

                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                                    value="option1" checked />
                                <label class="form-check-label" for="femaleGender">Female</label>
                            </div>

                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                                    value="option2" />
                                <label class="form-check-label" for="maleGender">Male</label>
                            </div>

                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                                    value="option3" />
                                <label class="form-check-label" for="otherGender">Other</label>
                            </div>

                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6 mb-4 pb-2">

                            <div data-mdb-input-init class="form-outline">
                                <input type="email" id="emailAddress" class="form-control form-control-lg" />
                                <label class="form-label" for="emailAddress">Email</label>
                            </div>

                        </div>
                        <div class="col-md-6 mb-4 pb-2">

                            <div data-mdb-input-init class="form-outline">
                                <input type="tel" id="phoneNumber" class="form-control form-control-lg" />
                                <label class="form-label" for="phoneNumber">Phone Number</label>
                            </div>

                        </div>
                    </div>

                    <div class="mt-4 pt-2">
                        <Link to="/connexion">
                            <input data-mdb-ripple-init class="btn btn-primary btn-lg" type="submit" value="Submit" />
                        </Link>
                    </div>
                    <p>Vous avez deja un copmte,  <Link to="/connexion">connectez-vous</Link></p>
                </form>
                </div>
                </div>
            </div>
        );
    }
}

export default Inscription;
