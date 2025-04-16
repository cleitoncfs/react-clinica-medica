import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Especialidades from "./pages/Especialidades/Especialidades";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BotaoVoltarAoTopo from "./components/BotaoVoltarAoTopo/BotaoVoltarAoTopo";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/especialidades" element={<Especialidades />} />
            </Routes>
            <Footer />
            <BotaoVoltarAoTopo />
        </Router>
    );
}

export default App;
