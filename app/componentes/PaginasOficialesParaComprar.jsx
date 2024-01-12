import Link from "next/link";

export default function PaginasOficialesParaComprar() {
  const lista = [
    {
      nombre: "Curubik",
      descripcion: "",
      link: "https://www.curubik.com/",
    },
    {
      nombre: "KubeKings",
      descripcion: "",
      link: "https://kubekings.com/",
    },
    {
      nombre: "MasKeCubos",
      descripcion: "",
      link: "https://www.maskecubos.com/es/",
    },
    {
      nombre: "Los mundos de Rubik",
      descripcion: "",
      link: "https://www.losmundosderubik.es/es/",
    },
  ];
  return (
    <div className="bg-rojo text-blanco h-full px-10 py-4 ">
      <h2 className="text-xl mb-5">Paginas para comprar cubos Rubik</h2>
      <ul className="grid gap-2">
        {lista.map((item, index) => (
          <li key={index}>
            <Link href={item.link}>
              <h1>{item.nombre}</h1>
            </Link>

            <p>{item.descripcion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
