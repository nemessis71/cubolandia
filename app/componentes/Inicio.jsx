import Image from "next/image";

export default function Inicio() {
  return (
    <div className="inicio bg-blanco grid grid-cols-3 mb-4">
      <Image
        className="pl-4 pt-4 w-[80px] md:w-[100px]"
        src="/images/cubo.png"
        alt=""
        width={100}
        height={20}
      />
      <div className="text-center w-full">
        <h1 className="text-black text-center text-[30px] md:text-[50px]">
          Cubolandia
        </h1>
        <h2 className="text-black text-center text-[15px] sm:text-[18px] md:text-[25px]">
          Informacion sobre Cubos Rubik
        </h2>
      </div>
    </div>
  );
}
