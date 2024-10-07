import React from "react";


class Navebar extends React.Component {
  render() {
    return (
      <div>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <h1>Admin Dashboard</h1>
    
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
      <span class="navbar-text">
        Navbar text with an inline element
      </span>
    </div>
  </div>
</nav>
      </div>
    )
  }
}


 class Accueil extends React.Component {
  render() {
    return (
      <div>
        <Navebar />
      </div>
    )
  }
}

export default Accueil