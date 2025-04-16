import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import {
    FaPhoneAlt,
    FaWhatsapp,
    FaMapMarkerAlt,
    FaExternalLinkAlt,
} from "react-icons/fa";

const Footer = () => {
    const phoneNumber = "5521999665555"; // Número no formato internacional sem caracteres especiais
    const whatsappMessage =
        "Olá, gostaria de informações sobre a Clínica Médica Life!";

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        whatsappMessage
    )}`;

    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img
                        src={logo}
                        alt="Clínica Médica Life"
                        className="footer-logo-img"
                    />
                </div>

                <div className="footer-contacts">
                    <p className="footer-contact-item">
                        <FaPhoneAlt className="footer-icon" /> Telefone:{" "}
                        <span className="footer-highlight">
                            (21) 99966-5555
                        </span>
                    </p>
                    <p className="footer-contact-item">
                        <span className="whatsapp-icon-container">
                            <FaWhatsapp className="whatsapp-icon" />
                        </span>
                        WhatsApp:{" "}
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-whatsapp-link"
                        >
                            <span className="footer-highlight">
                                (21) 99966-5555
                            </span>
                        </a>
                    </p>
                    <p className="footer-contact-item">
                        <FaMapMarkerAlt className="footer-icon" /> Endereço:{" "}
                        <span className="footer-highlight">
                            Av. Ayrton Senna, 3000 - Barra da Tijuca, Rio de
                            Janeiro
                        </span>
                    </p>
                </div>

                <div className="footer-legal">
                    <p className="footer-copyright">
                        © {new Date().getFullYear()} Clínica Médica Life - Todos
                        os direitos reservados
                    </p>
                    <p className="footer-credits">
                        Desenvolvido por{" "}
                        <a
                            href="https://portfolio-cleiton.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                            <span className="link-text">Cleiton Santos</span>
                            <FaExternalLinkAlt className="link-icon" />
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
