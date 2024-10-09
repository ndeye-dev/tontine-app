
import React from "react";

class Sidebar extends React.Component {
    render() {
        return (
            <div>
                <button
                    className="btn btn-toggle d-md-none" // Afficher uniquement sur mobile
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#sidebarContent"
                    aria-expanded="false"
                    aria-controls="sidebarContent"
                >
                    <i className="bi bi-list"></i> {/* Icône hamburger */}
                </button>

                <div className="sidebar bag collapse d-md-block" id="sidebarContent">
                    <h4 className="fw-bold mb-5">
                        <i className="bi bi-bag-check"></i> Bakeli Tontine
                    </h4>
                    <ul className="navbar-nav fs-5 fw-bold">
                        <li className="nav-item couleur mb-4 p-2">
                            <i class="bi bi-grid"></i> Dashboard
                        </li>
                        <li className="nav-item mb-4 hover p-2">
                            <i className="bi bi-person"></i> Utilisateurs
                        </li>
                        <li className="nav-item mb-4 p-2">
                            <i className="bi bi-currency-exchange"></i> Cotisations
                        </li>
                        <div className="btn-group">
                            <p className="p-2 hover"><i className="bi bi-gear"></i> Paramètres</p>
                            <button
                                type="button"
                                className="btn dropdown-toggle text-white"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            ></button>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><button className="dropdown-item" type="button">Action</button></li>
                                <li><button className="dropdown-item" type="button">Another action</button></li>
                                <li><button className="dropdown-item" type="button">Something else here</button></li>
                            </ul>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;

