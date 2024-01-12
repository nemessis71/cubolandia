import Image from "next/image";

export default function Inicio() {
  return (
    <div className="inicio bg-blanco grid grid-cols-3 ">
      <Image
        className="pl-4 pt-4"
        src="/images/cubo.png"
        alt=""
        width={100}
        height={20}
      />
      <div className="text-center w-full">
        <h1 className="text-black text-center text-[50px]">Cubolandia</h1>
        <h2 className="text-black text-center text-[25px]">
          Informacion sobre Cubos Rubik
        </h2>
      </div>
    </div>
  );
}
