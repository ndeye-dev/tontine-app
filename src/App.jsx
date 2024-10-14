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
        <Route path="/" element={<Inscription />} />
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
// class App extends React.Component {
//  constructor (props) {
//   super(props);
//   this.state = {titre: 'Bienvenue sur Bakeli-tonitne'
//     // p1: 'Connectez-vous',
//     // p2: 'Connectez-vous et gerez vos cotisations',
//     // telephone: '',
//     // motdepass: '',
//     // p3: 'Mot de pass oublier',
//     // button: 'Connexion'

//   }
//  }

//  render() {
//   return (
//      <h1 className="text-center text-info">{this.state.titre}</h1>
//   )
//  }
// }

// export default App

// Composant Image
// class Logo extends React.Component {
//   render() {
//     return (
//       <div className="col-lg-4 ">
//         <img src={this.props.src} alt={this.props.alt} style={{ width: '100%' }} />
//       </div>
//     );
//   }
// }

// // Composant Titre
// class Title extends React.Component {
//   render() {
//     return (
//       <h1 className=" text-center mb-4">{this.props.text}</h1>
//     );
//   }
// }

// // Composant Formulaire
// class LoginForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       password: ''
//     };
//   }

//   handleChange = (event) => {
//     this.setState({ [event.target.name]: event.target.value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     // Vous pouvez ajouter la logique de connexion ici
//     console.log('Connexion:', this.state);
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <div className="mb-3">
//           <label className="form-label">
//             Nom d'utilisateur:
//             <input
//               type="text"
//               name="username"
//               value={this.state.username}
//               onChange={this.handleChange}
//               required
//               className="form-control"
//             />
//           </label>
//         </div>
//         <div className="mb-3">
//           <label className="form-label">
//             Mot de passe:
//             <input
//               type="password"
//               name="password"
//               value={this.state.password}
//               onChange={this.handleChange}
//               required
//               className="form-control"
//             />
//           </label>
//         </div>
//         <button type="submit" className="btn btn-primary">Se connecter</button>
//       </form>
//     );
//   }
// }

// // Composant principal
// class LoginPage extends React.Component {
//   render() {
//     return (
//       <div className="container">
//         <div className="row">
//           <Logo src="https://via.placeholder.com/150" alt="Logo" />
//           <div className="col-lg-4">
//             <Title text="Connexion" />
//             <LoginForm />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default LoginPage;
