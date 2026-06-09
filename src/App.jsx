import Hero from "./components/Hero";
import "./index.css";
import Sobre from "./components/Sobre";
import Herram from "./components/Herram";
import Proyectos from "./components/Proyectos";
import Experiencias from "./components/Experiencias";
import Aira from "./components/Aira";
import Contacto from "./components/Contacto";
import Cursor from "./components/Cursor";

function App() {
  return (
    <div>
      <Hero />
      <Sobre />
      <Proyectos />
      <Herram />
      <Experiencias />
      <Aira />
      <Contacto />
      <Cursor />
    </div>
  );
}

export default App;