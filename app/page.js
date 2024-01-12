import Inicio from "./componentes/Inicio";
import SeccionDatos from "./componentes/SeccionDatos";
import "./styles.css";
import RecordGuinness from "./componentes/RecordGuinness";
import PaginasOficialesParaComprar from "./componentes/PaginasOficialesParaComprar";
import CreacionDelCubo from "./componentes/CreacionDelCubo";
import Footer from "./componentes/Footer";
import Los5MejoresSpeedCubersDelMundo from "./componentes/Los5MejoresSpeedCubersDelMundo";
import Cubos from "./componentes/Cubos";
export default function Principal() {
  return (
    <div>
      <Inicio />

      <div className="grid grid-cols-3 grid-rows-2 gap-2 bg-[#000] p-2">
        <CreacionDelCubo />
        <RecordGuinness />
        <SeccionDatos />
        <PaginasOficialesParaComprar />
        <Los5MejoresSpeedCubersDelMundo />
        <Cubos />
      </div>

      <Footer />
    </div>
  );
}
