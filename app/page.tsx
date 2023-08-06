import Image from "next/image";
import Screenwidth from "./components/screenwidth";
import NavBar from "./components/navabar";
import Heros from "./components/heros";
import Partenaires from "./components/partenaire";
export default function Home() {
  return (
    <main className="">
      <NavBar />

      <Screenwidth background="bg-hero-image bg-left md:bg-center bg-cover flex justify-center">
        <Heros />
      </Screenwidth>
      <Screenwidth bg="bg-white">
        <Partenaires />
      </Screenwidth>
    </main>
  );
}
