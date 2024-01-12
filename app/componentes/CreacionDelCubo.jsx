import Image from "next/image";

export default function CreacionDelCubo() {
  return (
    <div className="bg-azul text-blanco h-full px-10 py-4 grid gap-4">
      <div>
        <h2 className="text-center text-lg font-bold">
          ¿Quien creo el cubo Rubik?
        </h2>
        <p className="c">
          El arquitecto y profesor Erno Rubik diseñó en 1974 una forma
          geométrica, colorida y mecánica, que se convertiría en el rompecabezas
          símbolo de la década de los 80.
        </p>
      </div>
      <div>
        <h2 className="text-center text-lg font-[500]">
          Informacion del creador
        </h2>
        <p className="text-justify">
          Ernő Rubik es un escultor, arquitecto y diseñador de la Escuela de
          Artes Comerciales de Budapest, autor del cubo de Rubik aunque no es el
          único rompecabezas mecánico que lleva su nombre​ También se destacan
          el Rubik clock y Rubik Magic.
        </p>
      </div>
      <div className="flex justify-center">
        <Image src="/images/rubik.png" alt="" width={200} height={20} />
      </div>
    </div>
  );
}
