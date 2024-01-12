export default function SeccionDatos() {
  return (
    <div className="Cubos Grandes bg-amarillo h-full px-10 py-4">
      <h2 className="text-xl text-center mb-5">
        Los 5 cubos Rubik mas grandes
      </h2>
      <ol>
        <li className="text-justify">
          El cubo 33x33x33 creado en francia por Grégoire Pfennig
        </li>
        <li className="text-justify">
          El cubo 21x21x21 ocupa el segundo lugar, no pude encontrar mas
          informacion sobre este cubo.
        </li>
        <li className="text-justify">
          El cubo 17x17x17 fue creado por Oskar van Deventer en Holanda.
        </li>
        <li className="text-justify">
          El cubo 16x16x16 fue creado por la compania China llamada YuXin.
        </li>
        <li className="text-justify">
          El cubo 15x15x15 fue creado por la compania China llamada Moyu.
        </li>
      </ol>
    </div>
  );
}
