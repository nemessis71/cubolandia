import Image from "next/image";

export default function Cubos() {
  return (
    <div className="px-10 py-4 grid gap-4 bg-blanco text-center">
      <div>
        <h2 className="text-center text-lg font-bold mb-5">
          Los 5 mejores cubos del mundo
        </h2>
        <div className="text-justify">
          <p>Gan 356 X</p>
          <p>Moyu Weilong GTS3</p>
          <p>QiYi Valk 3 Power</p>
          <p>YJ MGC Elite</p>
          <p>MoYu RS3M 2020</p>
        </div>
      </div>
    </div>
  );
}
