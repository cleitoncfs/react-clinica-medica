import React from "react";
import "./Especialidade.css";

const Especialidade = ({ id, titulo, descricao, imagem, horarios }) => {
    return (
        <section id={id} className="container sessao-especialidade">
            <div className="container-titulo">
                <h3>{titulo}</h3>
                <p>{descricao}</p>
            </div>

            <div className="box-tabela-especialista">
                <img
                    src={imagem}
                    alt={`Imagem de um(a) ${titulo.toLowerCase()}`}
                    title={`Imagem de um(a) ${titulo.toLowerCase()}`}
                />

                <table className="tabela-especialistas">
                    <thead>
                        <tr>
                            <th>Dias</th>
                            <th>Horários</th>
                            <th>Médico(a)</th>
                        </tr>
                    </thead>

                    <tbody>
                        {horarios.map((horario, index) => (
                            <tr key={index}>
                                <td>{horario.dias}</td>
                                <td>{horario.horario}</td>
                                <td>{horario.medico}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Especialidade;
