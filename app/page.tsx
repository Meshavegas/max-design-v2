import Image from "next/image";
import Screenwidth from "./components/screenwidth";
import NavBar from "./components/navabar";
import Heros from "./components/heros";
import Partenaires from "./components/partenaire";
import Presentation from "./components/Presentation";
import Temoignage from "./components/Temoignage";
import Services from "./components/Services";
export default function Home() {
  return (
    <main className="">
      <NavBar />

      <Screenwidth
        background="bg-hero-image bg-left md:bg-center bg-cover flex justify-center"
        padding=" md:px-40 md:py-60 px-5 py-28"
      >
        <Heros />
      </Screenwidth>
      <Screenwidth bg="bg-white">
        <Partenaires />
      </Screenwidth>
      <Screenwidth bg="bg-white" padding=" md:px-0 md:py-0 px-5 py-10">
        <Presentation />
      </Screenwidth>
      <Screenwidth bg="bg-white" padding=" md:px-0 md:py-0 px-5 py-10">
        <Temoignage />
      </Screenwidth>
      <Screenwidth bg="bg-white" padding=" md:px-32 md:py-32 px-5 py-10">
        <Services />
      </Screenwidth>
    </main>
  );
}
