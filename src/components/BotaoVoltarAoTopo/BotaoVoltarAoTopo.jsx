import React, { useState, useEffect } from "react";
import { FaArrowUp, FaInfoCircle } from "react-icons/fa";
import "./BotaoVoltarAoTopo.css";

const BotaoVoltarAoTopo = () => {
    const [visivel, setVisivel] = useState(false);
    const [mostrarTooltip, setMostrarTooltip] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setVisivel(true);
            } else {
                setVisivel(false);
                setMostrarTooltip(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="botao-container">
            {/* Tooltip com ícone de informação */}
            {mostrarTooltip && (
                <div className="custom-tooltip">
                    <FaInfoCircle className="tooltip-icon" /> Voltar ao topo
                    <div className="tooltip-arrow"></div>
                </div>
            )}

            {/* Botão com apenas o ícone de seta */}
            <button
                className={`botao-voltar-topo ${visivel ? "visivel" : ""}`}
                onClick={scrollToTop}
                onMouseEnter={() => setMostrarTooltip(true)}
                onMouseLeave={() => setMostrarTooltip(false)}
                aria-label="Voltar ao topo"
            >
                <FaArrowUp className="icone-seta" />
            </button>
        </div>
    );
};

export default BotaoVoltarAoTopo;
