import React from "react";
import "./Home.css";
import recepcao from "../../assets/recepcao.png";
import medico from "../../assets/medico.jpg";
import ortopedia from "../../assets/ortopedia1.png";
import pediatra from "../../assets/pediatra.png";
import geriatra from "../../assets/geriatra.png";

const Home = () => {
    return (
        <main>
            {/* Seção com imagem de fundo */}
            <section
                className="box-visao-geral"
                style={{ backgroundImage: `url(${recepcao})` }}
            >
                <div className="box-visao-geral-titulo container">
                    <h1>
                        Clínica Médica Life
                        <br />
                        Aqui a gente cuida de você
                    </h1>
                </div>
            </section>

            <section id="sobre" className="container">
                <div className="container-titulo">
                    <h2>Sobre a clínica</h2>
                    <p>
                        Nossa clínica está pronta para receber nossos pacientes
                        através de uma excelente estrutura, comodidade e com a
                        segurança de que você precisam.
                    </p>
                </div>

                <div className="box-sobre">
                    <img
                        src={medico}
                        alt="Imagem de um médico"
                        title="Imagem de um médico"
                    />

                    <div>
                        <h3>Aqui na nossa clínica você vai encontrar:</h3>
                        <ul>
                            <li>
                                Horário flexível. Atendemos de segunda à sábado.
                            </li>
                            <li>Estacionamento amplo com 600 vagas.</li>
                            <li>Sala de espera com TV e Wifi.</li>
                            <li>Agendamento pelo telefone ou WhatsApp.</li>
                            <li>Excelente localização.</li>
                            <li>Entrega de exames em sua residência</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="especialidades" className="container">
                <div className="container-titulo">
                    <h3>Uma clínica de multiespecialidade</h3>
                    <p>
                        Nossa clínica possui diversas especialidades. Como
                        ortopedia, pediatra, geriatria, psicologia, fisioterapia
                        e outros.
                    </p>
                </div>

                <div className="box-especialidades">
                    <figure className="box-especialidade">
                        <img
                            src={ortopedia}
                            alt="Imagem de um ortopedista"
                            title="Imagem de um ortopedista"
                        />
                        <figcaption>Ortopedia</figcaption>
                    </figure>

                    <figure className="box-especialidade">
                        <img
                            src={pediatra}
                            alt="Imagem de uma pediatra"
                            title="Imagem de uma pediatra"
                        />
                        <figcaption>Pediatria</figcaption>
                    </figure>

                    <figure className="box-especialidade">
                        <img
                            src={geriatra}
                            alt="Imagem de uma geriatra"
                            title="Imagem de uma geriatra"
                        />
                        <figcaption>Geriatria</figcaption>
                    </figure>
                </div>

                <div className="box-link-horarios">
                    <a className="link-horarios" href="/especialidades">
                        Ver Horários
                    </a>
                </div>
            </section>

            <section id="contato" className="container">
                <div className="container-titulo">
                    <h3>Contato</h3>
                    <p>
                        Nossa clínica médica está aberto de{" "}
                        <strong>segunda à sábado das 6:00 às 21:00</strong>
                    </p>
                    <p>
                        Através do telefone/WhatsApp{" "}
                        <strong>(21) 99966-5555</strong> você pode fazer o
                        agendamento de consultas e exames.
                    </p>
                    <p>
                        Estamos localizados no estacionamento do Via Parque
                        Shopping{" "}
                        <strong>
                            av. Ayrton Senna, 3000 - Barra da Tijuca, Rio de
                            Janeiro
                        </strong>
                        .
                    </p>
                </div>

                <div className="container-rota">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14692.471710812997!2d-43.3641911!3d-22.9826906!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x539cb07246f0e38d!2sVia%20Parque%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1612707978931!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="350"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen
                        title="Localização da Clínica"
                    ></iframe>
                </div>
            </section>
        </main>
    );
};

export default Home;
