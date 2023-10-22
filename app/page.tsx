import Image from "next/image";
import Screenwidth from "./components/screenwidth";
import NavBar from "./components/navabar";
import Heros from "./components/heros";
import ParLay from "./components/ParLay";
import Presentation from "./components/Presentation";
import Temoignage from "./components/Temoignage";
import Services from "./components/Services";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import { faqData } from "./components/datas";
import Promotions from "./components/Promotions";
import { ServicesGet } from "./components/ServicesGet";
import Heros2 from "./components/heros2";
export default function Home() {
  return (
    <main className="">
      <NavBar />

      {/* <Screenwidth
        background="bg-light bg-left md:bg-center bg-cover flex justify-center"
        padding=" " 
      >
        */}
      <div>
        <Heros2 />
      </div>
      {/* </Screenwidth> */}
      <Screenwidth
        background=" bg-left md:bg-center bg-cover flex justify-center"
        padding=" "
      >
        <div className="bg-[#5890c2] lg:px-0 lg:py-60 px-5 py-28 w-full bg-opacity-80 justify-center flex">
          <Heros />
        </div>
      </Screenwidth>
      <Screenwidth
        background=" bg-white-light-s"
        padding=" lg:px-32 lg:py-32 px-5 py-10"
      >
        <ServicesGet />
      </Screenwidth>
      <Screenwidth
        background=" bg-white-light"
        padding=" lg:px-20 lg:py-32 px-5 py-10"
      >
        <ParLay />
      </Screenwidth>
      {/* <Screenwidth
        background=" bg-light-100"
        padding=" lg:px-0 lg:py-0 px-5 py-10"
      >
        <Presentation />
      </Screenwidth> 
      <Screenwidth
        background=" bg-light-100"
        padding=" lg:px-0 lg:py-0 px-5 py-10"
      >
        <Promotions />
      </Screenwidth>*/}
      <Screenwidth
        background=" bg-white-light"
        padding=" lg:px-20 lg:py-20 px-10 py-10"
      >
        <Temoignage />
      </Screenwidth>
      <Screenwidth
        background=" bg-[#FFECFF]"
        padding=" lg:px-10 lg:py-20 px-5 py-10"
      >
        <FAQ data={faqData} />
      </Screenwidth>
      <Screenwidth
        background="bg-white"
        padding=" lg:px-10 lg:py-10 px-5 py-10"
      >
        <Footer />
      </Screenwidth>
    </main>
  );
}
