import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
    const location = useLocation();
    const [menuAberto, setMenuAberto] = useState(false);
    const isEspecialidadesPage = location.pathname === "/especialidades";

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    return (
        <header className="topo">
            <div className="container">
                <div className="topo-titulo">
                    <Link to="/">
                        <img
                            className="topo-logo"
                            src={logo}
                            alt="logo"
                            title="logo"
                        />
                    </Link>
                </div>

                {/* Menu Desktop (permanece inalterado) */}
                <nav className="topo-links">
                    {isEspecialidadesPage ? (
                        <Link className="topo-link" to="/">
                            <FaHome className="home-icon" /> Voltar para Home
                        </Link>
                    ) : (
                        <>
                            <a className="topo-link" href="#sobre">
                                Sobre
                            </a>
                            <Link className="topo-link" to="/especialidades">
                                Especialidades
                            </Link>
                            <a className="topo-link" href="#contato">
                                Contato
                            </a>
                        </>
                    )}
                </nav>

                {/* Menu Mobile - Adicionado onClick e classe condicional */}
                <div
                    className={`menu-hamburger ${menuAberto ? "active" : ""}`}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <nav
                    className={`menu-hamburger-menu ${
                        menuAberto ? "active" : ""
                    }`}
                >
                    {isEspecialidadesPage ? (
                        <Link
                            className="topo-link"
                            to="/"
                            onClick={() => setMenuAberto(false)}
                        >
                            <FaHome className="home-icon" /> Voltar para Home
                        </Link>
                    ) : (
                        <>
                            <a
                                className="topo-link"
                                href="#sobre"
                                onClick={() => setMenuAberto(false)}
                            >
                                Sobre
                            </a>
                            <Link
                                className="topo-link"
                                to="/especialidades"
                                onClick={() => setMenuAberto(false)}
                            >
                                Especialidades
                            </Link>
                            <a
                                className="topo-link"
                                href="#contato"
                                onClick={() => setMenuAberto(false)}
                            >
                                Contato
                            </a>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
