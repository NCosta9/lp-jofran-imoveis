import Faq from "../../components/Accordion/Faq";
import Bancos from "../../components/Bancos";
import Banner3 from "../../components/Banner/Banner3";
import CarouselComentarios from "../../components/Carousel/CarouselComentarios";
import Conditions from "../../components/Conditions";
import ProCta from "../../components/Cta/ProCta";
import ProFeatures from "../../components/Features/ProFeatures";
import ProFooter from "../../components/Footer/ProFooter";
import Form from "../../components/Form";
import ProHero from "../../components/Heros/ProHero";
import Jumbotrons from "../../components/Jumbotrons";
import Seguro from "../../components/Seguro/ProFeatures";
import ProServices from "../../components/Services/ProServices";
import Team from "../../components/Team";
import '../../index.css'

export default function Home() {
    return(
        <>
          <main id="sobre">
            <Banner3/>
            <Jumbotrons/>
            <Conditions/>
            <ProFeatures/>
            <ProCta/>
            <ProHero/>
            <ProServices/>
            <Bancos/>
            <Seguro/>
            <CarouselComentarios/>
            <ProCta/>
            <Faq/>
            <Team/>
            <ProFooter/>
            
          </main>
        
        </>
    )
}