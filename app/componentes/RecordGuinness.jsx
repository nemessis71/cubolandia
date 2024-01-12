import Link from "next/link";

export default function RecordGuinness() {
  const lista = [
    {
      nombre: "Max Park",
      descripcion:
        "batió el récord de cubo de Rubik clásico 3x3x3. Lo solucionó en 3,134 segundos.",
      link: "https://youtu.be/gh8HX4itF_w?si=43UDlY4S_cA6lLLz",
    },
    {
      nombre: "Sebastian Weyer",
      descripcion:
        "batío el récord de cubo Rubik 4x4x4. Lo solucionó en 28,15 segundos.",
      link: "https://www.youtube.com",
    },
    {
      nombre: "Feliks Zemdegs",
      descripcion:
        "batío el récord de cubo Rubik 6x6x6. Lo solucionó en 1:20.03",
      link: "https://www.youtube.com",
    },
    {
      nombre: "Max Park",
      descripcion:
        "batío el récord de cubo Rubik 5x5x5. Lo solucionó en 36.46 segundos",
      link: "",
    },
  ];
  return (
    <div className="Records bg-naranja text-blanco h-full px-10 py-4 text-center">
      <h2 className="text-xl mb-5">Records Guinness</h2>
      <ul className="grid gap-4">
        {lista.map((item, index) => (
          <li key={index}>
            <Link href={item.link}>
              <h1 className="text-[#000] font-[600]">{item.nombre}</h1>
            </Link>

            <p>{item.descripcion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
