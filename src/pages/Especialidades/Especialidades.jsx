import React from "react";
import "./Especialidades.css";
import Especialidade from "../../components/Especialidade/Especialidade";

// Importando todas as imagens
import ortopediaImg from "../../assets/ortopedia.png";
import pediatraImg from "../../assets/pediatra2.png";
import geriatraImg from "../../assets/geriatra.png";
import psicologiaImg from "../../assets/psicologo.png";
import fisioterapiaImg from "../../assets/fisioterapia.png";

const especialidadesData = [
    {
        id: "ortopedia",
        titulo: "Ortopedia",
        descricao:
            "A ortopedia é a especialidade médica que cuida da saúde relacionadas aos elementos do aparelho locomotor, como ossos, músculos, ligamentos e articulações.",
        imagem: ortopediaImg, // Usando a imagem importada
        horarios: [
            {
                dias: "Segunda e quartas",
                horario: "8:00 às 13:00",
                medico: "Dra. Daniele Almeida",
            },
            {
                dias: "Terça, Quinta e Sexta",
                horario: "14:00 às 21:00",
                medico: "Dr. Daniel Souza",
            },
            {
                dias: "Sábado",
                horario: "8:00 às 21:00",
                medico: "Dr. Manoel Bento",
            },
        ],
    },
    {
        id: "pediatria",
        titulo: "Pediatria",
        descricao:
            "A pediatria é a especialidade médica dedicada à assistência à criança e ao adolescente, nos seus diversos aspectos, sejam eles preventivos ou curativos.",
        imagem: pediatraImg, // Usando a imagem importada
        horarios: [
            {
                dias: "Segunda e quartas",
                horario: "8:00 às 15:00",
                medico: "Dra. Elaine pinheiro",
            },
            {
                dias: "Terça, Quinta e Sexta",
                horario: "13:00 às 21:00",
                medico: "Dr. Anderson Ramos",
            },
            {
                dias: "Sábado",
                horario: "8:00 às 12:00",
                medico: "Dra. Manoela Foster",
            },
        ],
    },
    {
        id: "geriatria",
        titulo: "Geriatria",
        descricao:
            "Medicina geriátrica ou geriatria é o ramo da medicina que foca o estudo, a prevenção e o tratamento de doenças e da incapacidade em idades avançadas.",
        imagem: geriatraImg,
        horarios: [
            {
                dias: "Segunda e quinta",
                horario: "9:00 às 12:00",
                medico: "Dr. Antônio Freitas",
            },
            {
                dias: "Terça e Quarta",
                horario: "9:00 às 16:00",
                medico: "Dr. Alfred Conceição",
            },
            {
                dias: "Sexta",
                horario: "08:00 às 19:00",
                medico: "Dr. Almir Aguiar",
            },
            {
                dias: "Sábado",
                horario: "08:00 às 14:00",
                medico: "Dra. Andrea Almeida",
            },
        ],
    },
    {
        id: "psicologia",
        titulo: "Psicologia",
        descricao:
            "Psicologia é a especialidade médica que trata da mente, do estudo e análise de seus processos e comportamento de indivíduos e grupos humanos em diferentes situações.",
        imagem: psicologiaImg,
        horarios: [
            {
                dias: "Segunda, terça e quarta",
                horario: "8:00 às 21:00",
                medico: "Dra. Diane Faguntes",
            },
            {
                dias: "Quinta e Sexta",
                horario: "14:00 às 18:00",
                medico: "Dr. Daniel Dias",
            },
            {
                dias: "Sábado",
                horario: "10:00 às 15:00",
                medico: "Dra. Beatriz Luz",
            },
        ],
    },
    {
        id: "fisioterapia",
        titulo: "Fisioterapia",
        descricao:
            "Fisioterapia é uma ciência da saúde aplicada ao estudo, diagnóstico, prevenção e tratamento de disfunções cinéticas funcionais de órgãos e sistemas.",
        imagem: fisioterapiaImg,
        horarios: [
            {
                dias: "Segunda e quinta",
                horario: "11:00 às 20:00",
                medico: "Dr. Alberto de Paula",
            },
            {
                dias: "Segunda e quartas",
                horario: "08:00 às 15:00",
                medico: "Dra. Maria Fernades",
            },
            {
                dias: "Terça e sexta",
                horario: "14:00 às 21:00",
                medico: "Dra. Elaine Peixoto",
            },
            {
                dias: "Terça e quinta",
                horario: "08:00 às 14:00",
                medico: "Dra. Elaine Peixoto",
            },
            {
                dias: "Quarta e Sábado",
                horario: "8:00 às 21:00",
                medico: "Dra. Bianca Rocha",
            },
        ],
    },
];

const Especialidades = () => {
    return (
        <main>
            <section className="conteiner-links-especialidades">
                <div className="container links-especialidades">
                    {especialidadesData.map((especialidade) => (
                        <a
                            key={especialidade.id}
                            className="link-especialidade"
                            href={`#${especialidade.id}`}
                        >
                            {especialidade.titulo}
                        </a>
                    ))}
                </div>

                <h1>Conheça as nossas especialidades</h1>
            </section>

            {especialidadesData.map((especialidade) => (
                <Especialidade
                    key={especialidade.id}
                    id={especialidade.id}
                    titulo={especialidade.titulo}
                    descricao={especialidade.descricao}
                    imagem={especialidade.imagem}
                    horarios={especialidade.horarios}
                />
            ))}
        </main>
    );
};

export default Especialidades;
