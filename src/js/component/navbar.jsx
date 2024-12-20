import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar d-flex justify-content-between navbar-expand-lg bg-dark"> 
            <div className="container">
                <a className="navbar-brand text-white" href="#">Navbar</a> 
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="#">Home</a> 
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Features</a> 
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Pricing</a> 
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled text-white" aria-disabled="true">Disabled</a> 
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

{/* Agregué text-white, habia olvidado poner el bg negro en el navbar asi que esos fueron los cambios que hice al final*/}