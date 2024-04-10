import ProAbout from "../../components/Abouts/ProAbout";
import Faq from "../../components/Accordion/Faq";
import Bancos from "../../components/Bancos";
import Banner1 from "../../components/Banner/Banner1";
import CarouselComentarios from "../../components/Carousel/CarouselComentarios";
import Conditions from "../../components/Conditions";
import ProCta from "../../components/Cta/ProCta";
import ProFeatures from "../../components/Features/ProFeatures";
import ProFooter from "../../components/Footer/ProFooter";
import Form from "../../components/Form";
import ProHero from "../../components/Heros/ProHero";
import Jumbotrons from "../../components/Jumbotrons";
import ProPrincing from "../../components/Princings/ProPricing";
import Seguro from "../../components/Seguro/ProFeatures";
import ProServices from "../../components/Services/ProServices";
import Team from "../../components/Team";
import '../../index.css'
export default function Promova() {
    return(
        <>
          <main id="main">
            <Banner1/>
            <Jumbotrons/>
            <Conditions/>
            <ProFeatures/>
            <ProCta/>

            <ProHero/>
            {/* <ProAbout/> */}
            <ProServices/>
            <Bancos/>
            <Seguro/>
           

            <CarouselComentarios/>
            <ProCta/>
           
            {/* <ProPrincing/> */}
            <Faq/>
            <Team/>
          
            <ProFooter/>
            
          </main>
        
        </>
    )
}